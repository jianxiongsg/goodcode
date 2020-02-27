export function formatString(str,...data){
    return str.replace(/\{(\d+)\}/g,function(m ,i){
        return data[i];
    });
}

export function setStorage(key: string, item: string) {
    window.localStorage.setItem(key, item);
}

export function getStorage(key: string) {
    return window.localStorage && window.localStorage.getItem(key);
}


export function toFloat(v: any) {
    if (v === undefined) {
        return 0;
    }
    if (typeof (v) === 'number') {
        return v;
    }
    try {

        return parseFloat(v);
    } catch (e) {
        return 0;
    }
}


export function hasHrefParam(v: string) {
    return location.href.indexOf(v) !== -1;
}

export function getHrefNumberString(name: string) {
    if (!location.href) {
        return '0';
    }
    const m = location.href.match(new RegExp(`${name}=([\\d\\.]+)`, 'i'));
    if (m && m.length > 0) {
        return m[1];
    }
    return "0";
}

export function getHrefNumber(name: string) {
    if (!location.href) {
        return 0;
    }
    const m = location.href.match(new RegExp(`${name}=([\\d\\.]+)`, 'i'));
    if (m && m.length > 0) {
        try {
            return parseInt(m[1]);
        }
        catch (e) {
            return 0;
        }

    }
    return 0;
}

export function getHrefFloat(name: string) {
    if (!location.href) {
        return 0;
    }
    const m = location.href.match(new RegExp(`${name}=([\\d\\.]+)`, 'i'));
    if (m && m.length > 0) {
        try {
            return parseFloat(m[1]);
        }
        catch (e) {
            return 0;
        }

    }
    return 0;
}

export function getHrefString(name: string) {
    if (!location.href) {
        return '';
    }
    const m = location.href.match(new RegExp(`${name}=([\\w\\.]+)`, 'i'));
    if (m && m.length > 0) {
        return m[1];
    }
}



export function toInt(v: any) {
    if (v === undefined) {
        return 0;
    }
    if (typeof (v) === 'number') {
        return v;
    }
    try {

        return parseInt(v, 10);
    } catch (e) {
        return 0;
    }
}

export function toBool(v: any) {
    return String(v) === "true";
}
