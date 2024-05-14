// function Person (ism,fam,yosh) {
//     this.name = ism,
//     this.surName = fam,
//     this.age = yosh
// }

// console.log(Person)

// let abdulla = new Person('Abdulla','Ergashev',28)
// console.log(abdulla)
// let bunyod = new Person('Bunyod','Begbo\'tayev',14);
// console.log(bunyod)

// class Person {
//     name
//     #lastName
//     #age

//     constructor (ism,fam,yosh) {
//         this.name = ism
//         this.#lastName = fam
//         this.#age = yosh
//     }

//     hello (ism) {
//         console.log(this.name)
//     }

//     x= () => {
//         console.log(this.#age)
//     }

//     get surName () {
//         console.log(this.name + " " + this.#lastName)
//     }
    
//     set changeSurName (ism2) {
//         this.name = ism2
//     }
// }

// // console.log(Person)

// let Bunyod = new Person('Bunyod',"Begbo'tayev",14)
// console.log(bunyod.lastName)
// bunyod.surName
// console.log(bunyod.changeSurName = 'Bunyod2')
// console.log(bunyod.name)
// let abdulhamid = new Person('Abdulhamid','Ergashev',16)
// abdulhamid.x()
// console.log(abdulhamid)

// class Text {

//     constructor (obj) {
//         this.elem = document.querySelector(obj.el)
//         console.log(this.elem)
//         this.txt = this.elem.innerHTML
//         console.log(this.txt)
//         this.elem.innerHTML = null
//     }

//     str (x = 0) {
//         this.elem.innerHTML += this.txt[x]
//         x++

//         if(x < this.txt.length) {
//             setTimeout(() => {
//                 this.str(x)
//             }, 200);
//         }
//     }
// }

// const headline = new Text({
//     el: ".header__content h1"
// })
// console.log(headline.str())

// const description = new Text({
//     el: ".header__content p"
// })
// console.log(description.str())

class Fixed {
    nav
    constructor (option) {
        this.nav = document.querySelector(option.el)
        this.nav.style.position = 'fixed'
        this.nav.style.top = "600px"
        window.addEventListener('scroll',() => this.scrollCalc())
        window.addEventListener('resize',() => this.scrollCalc())
    }

    scrollCalc () {
        if(innerHeight - this.nav.offsetHeight - window.scrollY > 0) {
            this.nav.style.top = window.innerHeight - this.nav.offsetHeight - window.scrollY + "px"
        } else {
            this.nav.style.top = 0
        }
    }
}

const nav = new Fixed ({
    el: ".header__nav"
})
