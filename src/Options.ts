import { reDraw } from "./demo"
import { hide, show, _HE_OPTIONS, _HE_OPTIONS_IMPLEXES_COLOR, _HE_OPTIONS_IMPLEXES_COLOR_HIDE, _HE_OPTIONS_IMPLEXES_HIDE, _HE_OPTIONS_IMPLEXES_NOTHING, _HE_OPTIONS_MAXGEN, _HE_OPTIONS_TEMPLATE, _HE_OPTIONS_WALL } from "./HtmlElements"
import { Store } from "./Store"

export class ImplexesType {
	static nothing = "nothing"
	static hide = "hide"
	static color = "color"
	static colorHide = "colorHide"
}

const DEFAULT_TEMPLATE = `_FIRSTNAME_ _LASTNAME_
¤ _BIRTH_DATE_ _BIRTH_PLACE_
∩ _MARRIAGE_DATE_ _MARRIAGE_PLACE_
X _DEATH_DATE_ _DEATH_PLACE_
_OCCUPATION_`

export class Options{
    implexes:ImplexesType = ImplexesType.nothing
    maxGeneration:number = 100
    template:string = DEFAULT_TEMPLATE

    constructor(implexes:ImplexesType=null, maxGeneration:string=null, template:string = null){
        this.implexes = this.getValidImplexe(implexes)
        this.maxGeneration = this.getValideMaxGeneration(maxGeneration)
        this.template = this.getValideTemplate(template)
    }

    parse(json:string):Options{
        let object:any = {}
        if(json != null) {
            object = JSON.parse(json)
        }
        this.implexes = this.getValidImplexe(<string>object['implexes'])
        this.maxGeneration = this.getValideMaxGeneration(""+object['maxGeneration'])
        this.template = this.getValideTemplate(<string>object['template'])
        return this
    }

    getValidImplexe(str: string|ImplexesType): ImplexesType{
        if (ImplexesType.nothing === str){
            return ImplexesType.nothing
        }
        if (ImplexesType.hide === str){
            return ImplexesType.hide
        }
        if (ImplexesType.color === str){
            return ImplexesType.color
        }
        if (ImplexesType.colorHide === str){
            return ImplexesType.colorHide
        }
        //Default value
        return ImplexesType.nothing
    }

    getValideMaxGeneration(str: string):number{
        let value = 100
        if(str != null && str.match(/^\-?[0-9]+$/)){
            value = parseInt(str)
            if(value > 100 || value == 0 || value < -1){
                value = 100
            }
        }
        return value
    }

    getValideTemplate(str: string):string{
        if(str == null || str == undefined){
            return DEFAULT_TEMPLATE
        }
        return str
        //TODO verify validation & return default template
        //return DEFAULT_TEMPLATE
    }
}

export class OptionRepository{

    /**
     *  Save Option into the localstorage
     * @param options
     */
     static saveOptions(options:Options): void{
        localStorage.setItem('GedcomOptions', JSON.stringify(options))
    }

    static getOptions(): Options{
        let options = new Options()
        return options.parse(localStorage.getItem('GedcomOptions'))
    }
}

export class OptionBusiness{

    static refreshTemplateIntoUI(){
        _HE_OPTIONS_TEMPLATE.value = DEFAULT_TEMPLATE
    }

    static refreshOptionsIntoUI(){
        
        show([_HE_OPTIONS, _HE_OPTIONS_WALL])

        let options = OptionRepository.getOptions()
        _HE_OPTIONS_TEMPLATE.value = options.template
        _HE_OPTIONS_MAXGEN.value = options.maxGeneration+''
        switch (options.implexes) {
            case ImplexesType.nothing:
                _HE_OPTIONS_IMPLEXES_NOTHING.checked=true
                break;
            case ImplexesType.hide:
                _HE_OPTIONS_IMPLEXES_HIDE.checked=true
                break;
            case ImplexesType.color:
                _HE_OPTIONS_IMPLEXES_COLOR.checked=true
                break;
            case ImplexesType.colorHide:
                _HE_OPTIONS_IMPLEXES_COLOR_HIDE.checked=true
                break;
        
            default:
                _HE_OPTIONS_IMPLEXES_NOTHING.checked=true
                break;
        }


    }

    static saveOptionsfromUI(){
        let implexes = ImplexesType.nothing
        if(_HE_OPTIONS_IMPLEXES_HIDE.checked){
            implexes = ImplexesType.hide
        }
        if(_HE_OPTIONS_IMPLEXES_COLOR.checked){
            implexes = ImplexesType.color
        }
        if(_HE_OPTIONS_IMPLEXES_COLOR_HIDE.checked){
            implexes = ImplexesType.colorHide
        }
        let options = new Options(implexes, _HE_OPTIONS_MAXGEN.value, _HE_OPTIONS_TEMPLATE.value)
        
        //reset cache of Store
        Store.setOptions(options)

        //saving options 
        OptionRepository.saveOptions(options)
        
        OptionBusiness.hideOptions()

        //Redraw
        reDraw(true)
    }

    static hideOptions(){
        //hiding options HTML elements
        hide([_HE_OPTIONS, _HE_OPTIONS_WALL])
    }
}