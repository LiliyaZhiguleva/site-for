class Calc {
    _areaEl;
    _lampsEl;
    _smokeDetectorsEl;
    _totalEl;
    
    _areaValue = 0;
    _lampsValue = 0;
    _smokeDetectorsValue = 0;

    _areaPrice = 38;
    _lampPrice = 50;
    _smokeDetectorsPrice = 40;

    calculate() {
        const areaCoast = this._areaValue * this._areaPrice;
        const lampsCoast = this._lampsValue * this._lampPrice;
        const smokeDetectorsCoast = this._smokeDetectorsValue * this._smokeDetectorsPrice;

        const result = areaCoast + lampsCoast + smokeDetectorsCoast;

        this._totalEl.value = result > 0 ? result : '';
    }

    setValue(item, value) {
        const checkedValue = value.match(/\d/g)?.join('');

        switch(item) {
            case 'area':
                if (checkedValue !== value) this._areaEl.value = checkedValue;
                this._areaValue = Number(checkedValue || 0);
                break;
            case 'lamps':
                if (checkedValue !== value) this._lampsEl.value = checkedValue;
                this._lampsValue = Number(checkedValue || 0);
                break;
            case 'smokeDetectors':
                if (checkedValue !== value) this._smokeDetectorsEl.value = checkedValue;
                this._smokeDetectorsValue = Number(checkedValue || 0);
                break;
        }

        this.calculate()
    }

    initElemrnts() {
        this._areaEl = document.getElementById('area');
        this._lampsEl = document.getElementById('lamps');
        this._smokeDetectorsEl = document.getElementById('smokeDetectors');
        this._totalEl = document.getElementById('total');
    }

    init() {
        this.initElemrnts()

        this._areaEl.onkeyup = event => this.setValue('area', event.target.value);
        this._areaEl.onchange = event => this.setValue('area', event.target.value);
        this._lampsEl.onkeyup = event => this.setValue('lamps', event.target.value);
        this._lampsEl.onchange = event => this.setValue('lamps', event.target.value);
        this._smokeDetectorsEl.onkeyup = event => this.setValue('smokeDetectors', event.target.value);
        this._smokeDetectorsEl.onchange = event => this.setValue('smokeDetectors', event.target.value);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const calc = new Calc();

    calc.init();
})