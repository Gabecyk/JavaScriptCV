function cont() {
    var n1 = document.getElementById('btn')
    var n2 = document.getElementById('btnf')
    var n3 = document.getElementById('btnp')
    var res = document.getElementById('res');
    res.innerHTML = ''
    if (n1.value.length == 0 || n2.value.length == 0 || n3.value.length == 0) {
        res.innerHTML = `Impossivel contar!`;
    }
    else {
        let i = Number(n1.value)
        let f = Number(n2.value)
        let p = Number(n3.value)

        if (i < f) {

            while (i <= f){
                res.innerHTML += `${i} &#x1F449;`
                i += p
            }
        }
        else if (i > f) {
            while (i >= f){
                res.innerHTML += `${i} &#x1F449;`
                i -= p
            } 
        }
        res.innerHTML += `&#x2714`
    }
}