const mas = ['Маша',"Саша","Паша","Гена","Вова"]
const sotr = []

sotr[0] = {
   name: 'Маша',
   tel: 123789456,
   age: 23,
   img: 'https://img.freepik.com/free-photo/portrait-of-smiling-attractive-redhead-young-woman-with-long-wavy-hair_295783-487.jpg?w=900&t=st=1661275717~exp=1661276317~hmac=431f8d410a7d9d9c727b22e099be8fc8da13b7c22fc1e5419b4e4d3ea2c2f8d2',
}

sotr[1] = {
   name: 'Саша',
   tel: 649758341,
   age: 25,
   img: 'https://img.freepik.com/free-photo/happy-bearded-young-man-looks-with-joyful-expression-has-friendly-smile-wears-yellow-sweater-and-red-hat_295783-1388.jpg?w=900&t=st=1661273291~exp=1661273891~hmac=11b25fc348440d0e8b4a01573fd9675580eed01636f478b0dc9847e229a11fb7'
}

sotr[2] = {
   name: 'Паша',
   tel: 862345971,
   age: 27,
   img: 'https://img.freepik.com/free-photo/studio-portrait-of-bearded-man-posing-over-beige-background-looking-into-camera-with-broad-smile-on-his-face_295783-16582.jpg?w=740&t=st=1661276040~exp=1661276640~hmac=0dd47fbf1046eef8b1b41c4fbb58147804ce78c58541d22556a149f4add1e1bf'
}

function newelem () {
   for (let i = 0; i<sotr.length; i++) {
//let i = 0

   let newDiv = document.createElement('div')
   newDiv.classList.add("item_2")
//   check.name = 'do'
   document.getElementById("divs").append(newDiv)
//   let check = document.createElement('input')
   let newName = document.createElement('text')
   newName.innerHTML = '<br><b>Имя: </b>' + sotr[i].name
   let newAge = document.createElement('text')
   newAge.innerHTML = '<br><b>Возраст: </b>' + sotr[i].age
   let newTel = document.createElement('text')
   newTel.innerHTML = '<br><b>Телефон: </b>' + sotr[i].tel
//   check.type = "checkbox"
//   check.name = 'do'
//   newDiv.appendChild(check)
   const newImg = document.createElement('img')
   newImg.src = sotr[i].img
   newImg.width = 240
   newImg.classList.add("img_cart")
   newDiv.appendChild(newImg)
   newDiv.appendChild(newName)
   newDiv.appendChild(newAge)
   newDiv.appendChild(newTel)
}
}

function primer()
{
 //   var name = document.getElementById("fullName").value;
    document.getElementById("feedBack").innerHTML = sotr[0].name + sotr[1].name
 //   mas.push(name)
//    document.getElementById("fullName").value = ''
//    for (let i=0; i<mas.length; i++) {
//        document.getElementById("feedBack").innerHTML = document.getElementById("feedBack").innerHTML+    '<br/>\n'+mas[i]
  
//   }
}

