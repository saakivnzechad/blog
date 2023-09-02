let count = 0
let selected_part = 0
const docwidth = document.body.offsetWidth
const docheight = document.body.offsetHeight
const blur_bg = document.getElementById("fph")
const port_cont = document.getElementById("pcpc")
const exit = document.getElementById("exit_btn")
const full_text = document.getElementById("tph_2")
const image_bg = document.getElementById("iph")
const description1 = ["Project name 1", "place for short description 1", "url(img/project1.jpg)", "place for full description 1: Lorem ipsum dolor sit amet consectetur. Aliquet imperdiet eget iaculis a metus vulputate eget. Pellentesque vulputate sit tellus et cras elit habitant. Ornare risus mauris fringilla elementum id proin velit sodales cursus. Natoque in pellentesque laoreet elit eu pretium vitae quis eu. Non tristique eget vel vitae odio rhoncus mauris. Rutrum fringilla enim nec interdum cursus. Aliquet mattis dui vitae massa praesent. Diam blandit nulla ac nullam senectus lobortis eu. Est diam aliquet elit sed sollicitudin arcu. Sit justo lectus tortor risus facilisi parturient quis tellus pretium. A vel ultricies."]
const description2 = ["Project name 2", "place for short description 2", "url(img/project2.jpg)", "place for full description 2: Lorem ipsum dolor sit amet consectetur. Aliquet imperdiet eget iaculis a metus vulputate eget. Pellentesque vulputate sit tellus et cras elit habitant. Ornare risus mauris fringilla elementum id proin velit sodales cursus. Natoque in pellentesque laoreet elit eu pretium vitae quis eu. Non tristique eget vel vitae odio rhoncus mauris. Rutrum fringilla enim nec interdum cursus. Aliquet mattis dui vitae massa praesent. Diam blandit nulla ac nullam senectus lobortis eu. Est diam aliquet elit sed sollicitudin arcu. Sit justo lectus tortor risus facilisi parturient quis tellus pretium. A vel ultricies."]
const description3 = ["Project name 3", "place for short description 3", "url(img/project3.jpg)", "place for full description 3: Lorem ipsum dolor sit amet consectetur. Aliquet imperdiet eget iaculis a metus vulputate eget. Pellentesque vulputate sit tellus et cras elit habitant. Ornare risus mauris fringilla elementum id proin velit sodales cursus. Natoque in pellentesque laoreet elit eu pretium vitae quis eu. Non tristique eget vel vitae odio rhoncus mauris. Rutrum fringilla enim nec interdum cursus. Aliquet mattis dui vitae massa praesent. Diam blandit nulla ac nullam senectus lobortis eu. Est diam aliquet elit sed sollicitudin arcu. Sit justo lectus tortor risus facilisi parturient quis tellus pretium. A vel ultricies."]
const description4 = ["Project name 4", "place for short description 4", "url(img/project4.jpg)", "place for full description 4: Lorem ipsum dolor sit amet consectetur. Aliquet imperdiet eget iaculis a metus vulputate eget. Pellentesque vulputate sit tellus et cras elit habitant. Ornare risus mauris fringilla elementum id proin velit sodales cursus. Natoque in pellentesque laoreet elit eu pretium vitae quis eu. Non tristique eget vel vitae odio rhoncus mauris. Rutrum fringilla enim nec interdum cursus. Aliquet mattis dui vitae massa praesent. Diam blandit nulla ac nullam senectus lobortis eu. Est diam aliquet elit sed sollicitudin arcu. Sit justo lectus tortor risus facilisi parturient quis tellus pretium. A vel ultricies."]
const description5 = ["Project name 5", "place for short description 5", "url(img/project5.jpg)", "place for full description 5: Lorem ipsum dolor sit amet consectetur. Aliquet imperdiet eget iaculis a metus vulputate eget. Pellentesque vulputate sit tellus et cras elit habitant. Ornare risus mauris fringilla elementum id proin velit sodales cursus. Natoque in pellentesque laoreet elit eu pretium vitae quis eu. Non tristique eget vel vitae odio rhoncus mauris. Rutrum fringilla enim nec interdum cursus. Aliquet mattis dui vitae massa praesent. Diam blandit nulla ac nullam senectus lobortis eu. Est diam aliquet elit sed sollicitudin arcu. Sit justo lectus tortor risus facilisi parturient quis tellus pretium. A vel ultricies."]
const description6 = ["Project name 6", "place for short description 6", "url(img/project6.jpg)", "place for full description 6: Lorem ipsum dolor sit amet consectetur. Aliquet imperdiet eget iaculis a metus vulputate eget. Pellentesque vulputate sit tellus et cras elit habitant. Ornare risus mauris fringilla elementum id proin velit sodales cursus. Natoque in pellentesque laoreet elit eu pretium vitae quis eu. Non tristique eget vel vitae odio rhoncus mauris. Rutrum fringilla enim nec interdum cursus. Aliquet mattis dui vitae massa praesent. Diam blandit nulla ac nullam senectus lobortis eu. Est diam aliquet elit sed sollicitudin arcu. Sit justo lectus tortor risus facilisi parturient quis tellus pretium. A vel ultricies."]
const description7 = ["Project name 7", "place for short description 7", "url(img/project7.jpg)", "place for full description 7: Lorem ipsum dolor sit amet consectetur. Aliquet imperdiet eget iaculis a metus vulputate eget. Pellentesque vulputate sit tellus et cras elit habitant. Ornare risus mauris fringilla elementum id proin velit sodales cursus. Natoque in pellentesque laoreet elit eu pretium vitae quis eu. Non tristique eget vel vitae odio rhoncus mauris. Rutrum fringilla enim nec interdum cursus. Aliquet mattis dui vitae massa praesent. Diam blandit nulla ac nullam senectus lobortis eu. Est diam aliquet elit sed sollicitudin arcu. Sit justo lectus tortor risus facilisi parturient quis tellus pretium. A vel ultricies."]

function switch_images() {
    for(let i = 1; i < 8; i++) {
        let switch_obj = document.getElementById(String(i))
        switch(i) {
            case 1:
                switch_obj.style.backgroundImage = description1[2]
                break
                case 2:
                    switch_obj.style.backgroundImage = description2[2]
                    break
                    case 3:
                        switch_obj.style.backgroundImage = description3[2]
                        break
                        case 4:
                            switch_obj.style.backgroundImage = description4[2]
                            break
                            case 5:
                                switch_obj.style.backgroundImage = description5[2]
                                break
                                case 6:
                                    switch_obj.style.backgroundImage = description6[2]
                                    break
                                    case 7:
                                        switch_obj.style.backgroundImage = description7[2]
                                        break
        }
    }
}


function exit_full_view(from) {
    location.reload()
}

function full_view(fromtwo) {
    if (selected_part == count) {
        blur_bg.style.transition = "200ms"
        blur_bg.style.transitionTimingFunction = "cubic-bezier(0.25, 0.1, 0.25, 1.0)"
        blur_bg.style.display = "flex"
        port_cont.style.display = "none"
        exit.style.display = "block"
        full_text.style.color = "#cdcdcd"   
    }
}

function vagner(from) {
    for(let i = 1; i < 8; i++) {
        let obj = document.getElementById(i)
        let subcc = document.getElementById("cc" + i)
        subcc.style.transition = "200ms"
        obj.parentNode.style.transition = "200ms"
        obj.parentNode.style.transitionTimingFunction = "cubic-bezier(0.25, 0.1, 0.25, 1.0)"
        subcc.style.transitionTimingFunction = "cubic-bezier(0.25, 0.1, 0.25, 1.0)"
        subcc.style.display = "none"
        subcc.style.marginTop = "0"
        obj.parentNode.style.height = "480px"
        obj.parentNode.style.marginBottom = "0"
        obj.style.filter = "brightness(50%)"
        obj.style.animation = "none"
    }
    let ccSearchQuery = "cc" + from.getAttribute("id")
    selected_part = count
    count = from.getAttribute("id")

    let cc = document.getElementById(ccSearchQuery)
    from.parentNode.style.transition = "200ms"
    cc.style.transition = "200ms"
    cc.style.transitionTimingFunction = "cubic-bezier(0.25, 0.1, 0.25, 1.0)"
    from.parentNode.style.transitionTimingFunction = "cubic-bezier(0.25, 0.1, 0.25, 1.0)"
    cc.style.display = "block"
    cc.style.marginTop = "25px"
    from.parentNode.style.height = "544px"
    from.parentNode.style.marginBottom = "64px"
    from.style.animation = "choosed"
    from.style.animationDuration = "1s"
    from.style.transitionTimingFunction = "cubic-bezier(0.25, 0.1, 0.25, 1.0)"
    from.style.animationIterationCount = "infinite"
    from.style.filter = "brightness(100%)"

    switch(Number(count)) {
        case 1:
            document.getElementById("portfolio_title").innerText = description1[0]
            document.getElementById("portfolio_subtitle").innerText = description1[1]
            document.getElementById("tph_2").innerText = description1[3]
            image_bg.style.background = description1[2]
            blur_bg.style.background = description1[2]
            
            break
        case 2:
            document.getElementById("portfolio_title").innerText = description2[0]
            document.getElementById("portfolio_subtitle").innerText = description2[1]
            document.getElementById("tph_2").innerText = description2[3]
            image_bg.style.background = description2[2]
            blur_bg.style.background = description2[2]
            break
        case 3:
            document.getElementById("portfolio_title").innerText = description3[0]
            document.getElementById("portfolio_subtitle").innerText = description3[1]
            document.getElementById("tph_2").innerText = description3[3]
            image_bg.style.background = description3[2]
            blur_bg.style.background = description3[2]
            break
        case 4:
            document.getElementById("portfolio_title").innerText = description4[0]
            document.getElementById("portfolio_subtitle").innerText = description4[1]
            document.getElementById("tph_2").innerText = description4[3]
            image_bg.style.background = description4[2]
            blur_bg.style.background = description4[2]
            break
        case 5:
            document.getElementById("portfolio_title").innerText = description5[0]
            document.getElementById("portfolio_subtitle").innerText = description5[1]
            document.getElementById("tph_2").innerText = description5[3]
            image_bg.style.background = description5[2]
            blur_bg.style.background = description5[2]
            break
        case 6:
            document.getElementById("portfolio_title").innerText = description6[0]
            document.getElementById("portfolio_subtitle").innerText = description6[1]
            document.getElementById("tph_2").innerText = description6[3]
            image_bg.style.background = description6[2]
            blur_bg.style.background = description6[2]
            break
        case 7:
            document.getElementById("portfolio_title").innerText = description7[0]
            document.getElementById("portfolio_subtitle").innerText = description7[1]
            document.getElementById("tph_2").innerText = description7[3]
            image_bg.style.background = description7[2]
            blur_bg.style.background = description7[2]
            break
    
    }
}

function group(direction) {
    result = Number(count) + direction
    if (result > 7) {
        result = 1
    }
    else if (result < 1) {
        result = 7
    }

    result = String(result)
    vagner(document.getElementById(result))
}