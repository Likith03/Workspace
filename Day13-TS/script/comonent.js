export function Component(config) {
    return function (targetClass) {
        return class {
            constructor() {
                this.selector = config.selector;
                this.template = config.template;
            }
        };
    };
}
// export { Component };//
