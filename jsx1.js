function ComponentFoo(prop) {
    return React.createElement(AnotherComponent, { name: prop.name });
}
var Button = function (prop, context) { return React.createElement("button", null); };
