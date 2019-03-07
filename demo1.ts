// disposable Mixin
class Disposable {
    isDisposabled: boolean;
    dispose() {
        this.isDisposabled = true;
    }
}

// Activatable Mixin
class Activatable {
    isActive: boolean;
    activate() {
        this.isActive = true;
    }
    deactivate() {
        this.isActive = false;
    }
}

class SmartObject implements Disposable, Activatable {
    constructor() {
        setInterval(() => {
            console.log(`isActive: ${this.isActive} - isDisposabled: ${this.isDisposabled}`);
        }, 500);
    }
    interact() {
        this.activate();
    }
    // Disposable
    isDisposabled: boolean = false;
    dispose: () => void;
    // Activatable
    isActive: boolean = false;
    activate: () => void;
    deactivate: () => void;
}

applyMixins(SmartObject, [Disposable, Activatable]);

let smartObj = new SmartObject();
setTimeout(() => {
    smartObj.interact();
}, 1000);


// library
function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name]
        });
    });
}