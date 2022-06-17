function Component(config:any){
    return function(targetClass:any){
        return class {
            selector = config.selector;
            template = config.template;
        }
    }
}
 
// export { Component };//
@Component({
    selector : "app-root",
    template : `
        <div>
            <h1> Hello from App Component </h1>
        </div>
    `
})
class AppComponent{
    
}