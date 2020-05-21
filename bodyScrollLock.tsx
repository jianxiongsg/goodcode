

  var locks:HTMLElement[] = [];
  var initClientY;
  var documentListenerAdded = false;
  


  const preventDefault=(e)=>{
      if(e.cancelable) e.preventDefault();
  }

  const initPos=(e)=>{
      initClientY = e.touches[0].clientY;
  }

  function isToBottomScroll(element){
      var maxScroll = element.scrollHeight - element.clientHeight;
      return element.scrollTop+1 >= maxScroll?true:false;
  }

  function touchmove(e,element){
      var scrolldir = e.touches[0].clientY - initClientY;
      if(scrolldir > 0 && element.scrollTop === 0){
          preventDefault(e);
          return;
      }
      if(scrolldir < 0 && isToBottomScroll(element)){
          preventDefault(e);
          return;
      }
      e.stopPropagation();
      return;
  }
  
  export function disableDodyScroll(element){
      if(locks.some(lock=>lock === element)){
          return;
      }
      locks.push(element);
      element.addEventListener('touchstart',initPos,{passive:false});
      element.addEventListener('touchmove',(e)=>{
          touchmove(e,element);
      },{passive:false});
      if(!documentListenerAdded){
          document.addEventListener('touchmove',preventDefault,{passive:false})
          documentListenerAdded = true;
      }
      
  }

  export function enableBodyScroll(element:HTMLElement){
      element.removeEventListener('touchstart',initPos);
      element.removeEventListener('touchmove',(e)=>{
          touchmove(e,element);
      });
      var idx = locks.indexOf(element);
      if(idx != -1){
          locks.splice(idx,1);
      }
      if(locks.length === 0 && documentListenerAdded){
          document.removeEventListener('touchmove',preventDefault)
      }
  }

  export function clearAllBodyScrollLocks() {
        locks.forEach((element) => {
          element.ontouchstart = null;
          element.ontouchmove = null;
        });
    
        if (documentListenerAdded) {
          document.removeEventListener('touchmove', preventDefault);
          documentListenerAdded = false;
        }
    
        locks = [];
        initClientY = -1;
    };

