type Obj = Record<any, any>;

function compactObject(obj: Obj): Obj {
    if (Array.isArray(obj)) {
        return obj.filter(Boolean).map(compactObject)
    }
    if (obj === null ||
        typeof obj === "boolean" ||
        typeof obj === "number" ||
        typeof obj === "string") {

        return obj
    }

    const result = {}

    for (const key in obj) {
        if (!Boolean(obj[key])) {
            continue
        }
        result[key] = compactObject(obj[key])
    }
    return result
};