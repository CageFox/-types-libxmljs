// Type definitions for Libxmljs v0.14.2
// Project: https://github.com/libxmljs/libxmljs
// Definitions by: Ivan Pesochenko <https://github.com/wallride>, Cagefox <https://github.com/CageFox>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "libxmljs" {

    import events = require('events');

    export function parseHtmlString(source:string):Document;
    export function parseHtmlFragment(source:string):Document;
    export function parseXmlString(source:string):Document;
    export function parseXml(source:string):Document;
    export function memoryUsage():number;
    export function nodeCount():number;

    export class Document {
        constructor(version:string, encoding:string);
        root():Element;
        root(node:Element):Element;
        node(name:string, content:string):Element;
        find(xpath:string):Element[];
        get(xpath:string, ns_uri?:string):Element;
        child(idx:number):Element;
        childNodes():Element[];
        toString(formatted?:boolean):string;
        version():string;
        encoding(encoding?:string):string;
        validate(xsdDoc:Document): boolean;
        rngValidate(rng:Document):boolean;
        getDtd();
        setDtd(name, ext, sys);
        namespaces();
        type():string;
    }
 
    export class Element extends Node{
        constructor(doc:Document, name:string, content?:string);
        attrs():Attribute[];
        attr(name:string):Attribute;
        attr(name:string, value:string):void;
        attr(attrObject:{[key:string]:string;}):void;
        node(name:string, content?:string):Element;
        cdata(content:string):Element;
        get(xpath:string):Element;
        get(xpath:string, ns_uri:string):Element;
        get(xpath:string, ns_uri:{[key:string]:string;}):Element;
        defineNamespace(prefix:string, href:string):Namespace;
        defineNamespace(href:string):Namespace;

        find(xpath:string):Element[];
        find(xpath:string, ns_uri:string):Element[];
        find(xpath:string, namespaces:{[key:string]:string;}):Element[];
        name():string;
        name(newName:string):void;
        text():string;
        child(idx:number):Node;
        childNodes():Node[];
        addChild(child:Node):Node;
        path():string;
        nextElement():Element;
        prevElement():Element;
        addNextSibling(siblingNode:Element):Element;
        addPrevSibling(siblingNode:Element):Element;
    }
    
    export class Comment extends Node{
        constructor(doc:Document, content:string);
        text():string;
        text(content:string):string;
    }
    
    export class Text extends Node{
        constructor(doc:Document, content:string);
        text(): string;
    }

    export class Attribute extends Node{
        name():string;
        value():string;
        namespace():Namespace;
        namespace(ns:Namespace):Namespace;
    }

    export class Namespace {
        href():string;
        prefix():string;
    }


    export class Node{
        parent():Node;
        doc():Document;
        namespace():Namespace;
        namespace(ns:Namespace):void;
        namespace(href:string):void;
        namespace(prefix:string, href:string):void;
        nextSibling():Node;
        prevSibling():Node;
        line():number;
        type():string;
        remove():void;
        clone():Node;
        toString(options?:Object|boolean):string;
    }



    export class SaxParser extends events.EventEmitter {
        parseString(source:string):boolean;
    }
 
 
    export class SaxPushParser extends events.EventEmitter {
        push(source:string):boolean;
    }

    export interface XmlError {
        domain: number;
        code: number;
        message: string;
        level: number;
        file?: string;
        column: number;
        line: number;
    }
}
