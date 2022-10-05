// menu
let arrowMenuGo = document.querySelector(".account span.arrow-go");
let arrowMenuBack = document.querySelector(".account div.arrow-back");
let sidebar = document.querySelector(".menu");
let account = document.querySelector(".account");
let accountDesc = document.querySelector(".account .a-title ");
// let accountDescS = document.querySelector(".account .a-title span");
let accountImg = document.querySelector(".account img");
let civilMenu = document.querySelector('.li-menu')
let titleMenu = document.querySelectorAll(".li-menu ul li a .title");
let titleMenuBack = document.querySelectorAll(".menu ul li");
let iconMenu = document.querySelectorAll(".menu ul li .icon");
let exitSetting = document.querySelector(".exit-setting");
let exitSettingTitle = document.querySelectorAll(".exit-setting li .title");
let exitSettingIcon = document.querySelectorAll(".exit-setting li .icon");
let innerMenu = document.querySelector('.inner-menu')
let liClicked = document.querySelector('li.clicked')






// menu
class Sidebar {
  littleWidth() {
    // sidebar.classList.remove('menu')
    sidebar.classList.add('menu-two')
    arrowMenuGo.classList.add('hidden')
    arrowMenuBack.classList.remove('hidden')
    accountDesc.classList.add('hidden')
    // accountDescS.classList.add('hidden')
    titleMenu.forEach(title => {
      title.classList.add('hidden')
    });
    innerMenu.classList.remove('inner-menu')
    civilMenu.classList.add('li-menu-two')
    accountImg.classList.add('image-account')
    liClicked.classList.remove('clicked')
    liClicked.classList.add('bccolor')
    exitSetting.classList.add('li-menu-two')
    exitSettingTitle.forEach(title => {
      title.classList.add('hidden')
    });
    iconMenu.forEach(icon => {
      icon.classList.add('icon-two')
    });
    titleMenuBack.forEach(liTitle => {
      liTitle.classList.remove('big-width')
      liTitle.classList.add('little-width')
    });


  }
  bigWidth() {
    sidebar.classList.remove('menu-two')
    arrowMenuGo.classList.remove('hidden')
    arrowMenuBack.classList.add('hidden')
    setTimeout(() => {
      titleMenu.forEach(title => {
        title.classList.remove('hidden')
      });
    }, 500);
    innerMenu.classList.add('inner-menu')
    civilMenu.classList.remove('li-menu-two')
    accountImg.classList.remove('image-account')
    setTimeout(() => {
      accountDesc.classList.remove('hidden')
      // accountDescS.classList.remove('hidden')

    }, 500);
    liClicked.classList.add('clicked')
    liClicked.classList.remove('bccolor')
    exitSetting.classList.remove('li-menu-two')
    exitSettingTitle.forEach(title => {
      title.classList.remove('hidden')
    });
    iconMenu.forEach(icon => {
      icon.classList.remove('icon-two')
    });
    titleMenuBack.forEach(liTitle => {
      liTitle.classList.add('big-width')
      liTitle.classList.remove('little-width')
    });
    setTimeout(() => {

    }, 500);

  }
}

let changWidth = new Sidebar

arrowMenuGo.addEventListener('click', () => {
  changWidth.littleWidth()
})
arrowMenuBack.addEventListener('click', () => {
  changWidth.bigWidth()
})
// step 2
let spans = document.querySelectorAll(" span.ready");
let inputs = document.querySelectorAll("span input");
let selects = document.querySelectorAll("select.ready");

let textArea = document.querySelectorAll('textarea')
console.log(inputs)
// step 2

class BorderColor {
  addBorder(e) {
    let that = e;
    let parent = that.parentElement;
    parent.classList.add("borderd");


    // console.log(parent);
  }
  removeBorder() {
    spans.forEach((span) => {
      if (span.classList.contains("borderd")) {
        span.classList.remove("borderd");
      }
    });
  }
  blurBorder() {
    spans.forEach((span) => {
      span.classList.remove("borderd");
    });
  }
}
let borderColor = new BorderColor();

inputs.forEach((input) => {
  input.addEventListener("mouseup", (e) => {
    borderColor.addBorder(e.target);
  });
});
selects.forEach(select => {

  select.addEventListener("mouseup", (e) => {
    borderColor.addBorder(e.target);
  });
});
inputs.forEach((input) => {
  input.addEventListener("mousedown", () => {
    borderColor.removeBorder();
  });
});
inputs.forEach((input) => {
  input.addEventListener("blur", () => {
    borderColor.blurBorder();
  });
});
selects.forEach(select => {

  select.addEventListener("blur", () => {
    borderColor.removeBorder();
  });
});
textArea.forEach(area => {
  area.addEventListener("mouseup", (e) => {
    borderColor.addBorder(e.target);
  });

  area.addEventListener("blur", () => {
    borderColor.removeBorder();
  });
});



// schedule
let editClick = document.querySelector(".ticks span.edit");
let tickClick = document.querySelector(".ticks span.tick");
let crossClick = document.querySelector(".ticks span.cross");
let reportClick = document.querySelector(".ticks span.report");
let downloadClick = document.querySelector(".ticks span.download");
let scheduleDown = document.querySelector(".schedule-down");
let anotherInputs = document.querySelector('.another-inputs')
// let civilContetn = document.querySelector('.main-two-inners')
console.log(editClick)


class AddTOList {
  plusToTick() {
    console.log('1')
    editClick.classList.remove("flex");
    editClick.classList.add("hidden");
    tickClick.classList.add('flex')
    tickClick.classList.remove('hidden')
    crossClick.classList.add("translate", "clicked");
    crossClick.classList.remove("not-clicked");
    reportClick.classList.add("translate", "clicked");
    reportClick.classList.remove("not-clicked");
    downloadClick.classList.add("translate", "clicked");
    downloadClick.classList.remove("not-clicked");

  }
  backTOPlus() {
    editClick.classList.add("flex");
    editClick.classList.remove("hidden");
    tickClick.classList.remove('flex')
    tickClick.classList.add('hidden')
    crossClick.classList.add("not-clicked");
    crossClick.classList.remove("clicked", "translate");
    reportClick.classList.remove("translate", "clicked");
    reportClick.classList.add("not-clicked");
    downloadClick.classList.remove("translate", "clicked");
    downloadClick.classList.add("not-clicked");
  }
  plusHeight() {
    scheduleDown.classList.add("grid");
    scheduleDown.classList.remove("hidden");
    // civilContetn.classList.add('min-heights')

    setTimeout(() => {
      anotherInputs.classList.remove('-z-10')

    }, 500);
  }
  minesHeight() {
    scheduleDown.classList.add("hidden");
    scheduleDown.classList.remove("grid");
    // anotherInputs.classList.add('-z-10')
    // civilContetn.classList.remove('min-heights')

    // 

  }
}
let addToList = new AddTOList();

editClick.addEventListener("click", () => {
  addToList.plusToTick();
  addToList.plusHeight();
});
// tickClick.addEventListener('click',()=>{
//     addToList.backTOPlus()
// })
crossClick.addEventListener("click", () => {
  addToList.backTOPlus();
  addToList.minesHeight();
});



// charts

// import fa from "../node_modules/apexcharts/dist/locales/fa.json" assert {type: "json"};


var options = {
  colors: ["#FEA90C", "#F74B49"],
  series: [{
    name: 'فعالیت های مطالعاتی',
    data: [102, 55, 57, 56, 16, 150, 63, 60, 66],
    colors: '#F44336',

  }, {
    name: 'زمان از دست رفته',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
  }],
  chart: {
    // locales: [fa],
    // defaultLocale: 'fa',
    height: 350,
    type: 'line',
    zoom: {
      enabled: false
    },
    dropShadow: {
      enabled: true,
      // enabledOnSeries: 1,
      top: 0,
      left: 0,
      blur: 3,
      color: ["#FEA90C", "#F74B49"],
      opacity: 0.5,
    },
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    show: true,
    markers: {
        width: 16,
        height: 16,
        strokeWidth: 0,
        strokeColor: '#fff',
        fillColors: ['#FEA90C', '#F74B49'],
        radius: 6,
        customHTML: undefined,
        onClick: undefined,
        offsetX: 10,
        offsetY: 0,
        // margin: 6 ,
    },
},
  
  stroke: {
    curve: 'smooth'
  },

  title: {
    text: '',
    align: 'left'
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
  },
  grid: {
    show: true,
    borderColor: '#90A4AE',
    strokeDashArray: 0,
    position: 'back',
    xaxis: {
        lines: {
            show: false
        }
    },
    yaxis: {
        lines: {
            show: false
        }
    },
    row: {
        colors: undefined,
        opacity: 0.5
    },
    column: {
        colors: undefined,
        opacity: 0.5
    },
    padding: {
        top: 0,
        right: 20,
        bottom: 0,
        left: 20
    },
},

};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();




function create_copy(obj, parentobj) {
  /*  obj , elementie ke gharare copy beshe && parentObject jaeey ke gharare copy beshe   */
  // var imgtodrag = obj.find('#number-span').eq(0);
  // var imgtodrag = obj.eq(0);

  // if (imgtodrag) {
  // var imgclone = imgtodrag.clone()
  console.log('obj');
  console.log(obj);
  console.log('parentobj');
  console.log(parentobj);
  console.log('clone');
  var imgclone = $(obj).clone().appendTo($(parentobj));

  console.log(imgclone);
  // if (cart.find('p.hidden-phone').length > 0) {
  //     $("html, body").animate({
  //         scrollTop: 0
  //     }, 600);
  // }
  // setTimeout(function () {
  //   cart.effect("shake", {
  //     times: 1
  //   }, 500);
  //   var n = parseInt(cart.find('.number_basket').text());
  //   var basket_marker = cart.find('#basket_marker');
  //   if (increased) {
  //     n++;
  //     if (isNaN(n)) {
  //       n = 1;
  //     }
  //     basket_marker.css('display', '');
  //   } else {
  //     n--;
  //     if (n === 0) {
  //       basket_marker.css('display', 'none');
  //     }
  //   }
  //   cart.find('.number_basket').text(n);
  // }, 1200);
  // }
}

// drag n drop
const list_items = document.querySelectorAll('.list-items');
const lists = document.querySelectorAll('.list');
console.log(lists)
let draggedItem = null;
let tempvar = null;
for (let i = 0; i < list_items.length; i++) {
  const item = list_items[i];

  item.addEventListener('dragstart', function (e) {
    // console.log(e.target)
    draggedItem = item;
    tempvar = this.parentElement

    // setTimeout(function () {
    //   item.style.display = 'none';
    // }, 0)
  });

  item.addEventListener('dragend', function () {
    setTimeout(function () {
      draggedItem.style.display = 'block';
      if (tempvar.parentElement.id === 'second_table') {
        // create_copy(draggedItem,tempvar);
        tempvar.append(draggedItem)

        tempvar = null;
      }
      draggedItem = null;
    }, 0);
  })

  for (let j = 0; j < lists.length; j++) {
    // console.log(lists[j].children.length)
    const list = lists[j];
    list.addEventListener('dragover', function (e) {
      e.preventDefault();
      this.classList.remove('border')
      this.classList.remove('border-dashed')
      this.classList.remove('rounded-2xl')
    });

    list.addEventListener('dragenter', function (e) {
      e.preventDefault();
      // this.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
    });

    list.addEventListener('dragleave', function () {
      // this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
      this.classList.add('border')
      this.classList.add('border-dashed')
      this.classList.add('rounded-2xl')
    });

    list.addEventListener('drop', function (e) {
      // console.log(this.children.length)
      if (this.children.length < 1) {
        // this.append(draggedItem);
        if (tempvar && tempvar.parentElement.id === 'second_table') {
          create_copy(draggedItem, this);
        } else {
          this.append(draggedItem)
        }
      }
      // console.log('drop');
      // this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
    });

  }
}

//pop ups
let container = document.querySelector('.containe')
let protestClick = document.querySelectorAll('ul.protest li.top')
let protestDiv = document.querySelector('div.protest')
let closeProtest = document.querySelector('div.protest span.cross')
let reportIcone = document.querySelector('.daily-schedule .search-tick-inputs .ticks span.report')
let closeReport = document.querySelector('.report span.cross')
let reportDiv = document.querySelector('div.report')
console.log(closeReport)

class PopUp {
  showProtest() {
    container.classList.add('contrast-50')
    protestDiv.classList.remove('scale-0')
    protestDiv.classList.add('scale-100')

  }
  hideProtest() {
    container.classList.remove('contrast-50')
    protestDiv.classList.add('scale-0')
    protestDiv.classList.remove('scale-100')

  }
  showReport() {
    container.classList.add('contrast-50')
    reportDiv.classList.remove('scale-0')
    reportDiv.classList.add('scale-100')
  }
  hideReport() {
    container.classList.remove('contrast-50')
    reportDiv.classList.add('scale-0')
    reportDiv.classList.remove('scale-100')

  }
}
let popUp = new PopUp()

protestClick.forEach(protest => {
  protest.addEventListener('click', () => {
    popUp.showProtest()
  })

});
closeProtest.addEventListener('click', () => {
  popUp.hideProtest()
})
reportIcone.addEventListener('click', () => {
  popUp.showReport()
})
closeReport.addEventListener('click', () => {
  popUp.hideReport()
})

document.addEventListener('click', (e) => {
  console.log(e.target.classList)
})


// select lesson add to list
let selectLessonTickclick = document.querySelector('.select_lesson span.tick')
let selectLessonResult = document.querySelector('.select_lesson .add-to-list')
console.log(selectLessonTickclick)

class AddToSelectLessonList {
  placement() {
    // console.log('first2')
    let liInResultSmsNo = `


      <li class="civil-inner-trhee relative cursor-pointer ">
        <div class="add-lists items-center">
            <span class="num">1</span>
            <p class="one-one">عربی</p>
            <p class="one-two">فعل</p>
            <p class="one-three">ثلاثی مزید</p>
            <p class="one-four">سلام رفع اشکال هست</p>
            <p class="one-five">13</p>
            <p class="one-six">6</p>
            <p class="one-seven">2</p>
            <p class="one-eight">24%</p>
            
        </div>
      </li>
  

  `
    selectLessonResult.innerHTML += liInResultSmsNo


  }
}

let addToSelectLessonList = new AddToSelectLessonList()
selectLessonTickclick.addEventListener('click', () => {
  addToSelectLessonList.placement();
})


// queez add to list
let queezClick = document.querySelector('.queez span.tick')
let quezzResult = document.querySelector('.queez .add-to-list')
console.log(selectLessonTickclick)

class QueezList {
  placement() {
    // console.log('first2')
    let liInResultSmsNo = `


    <li class="civil-inner-trhee relative cursor-pointer ">
    <div class="add-lists items-center">
        <span class="num">1</span>
        <p class="two-one">عربی</p>
        <p class="two-two">فعل</p>
        <p class="two-three">ثلاثی مزید</p>
        <!-- <p class="two-four">سلام رفع اشکال هست</p> -->
        <p class="two-five">13</p>
        <p class="two-six">6</p>
        <p class="two-seven">2</p>
        <p class="two-eight">24%</p>
       
    </div>
</li>
  

  `
    quezzResult.innerHTML += liInResultSmsNo


  }
}

let queezList = new QueezList()
queezClick.addEventListener('click', () => {
  queezList.placement();
})


// select lesson div
let SLplusClick = document.querySelector(".select_lesson .ticks span.plus");
let SLTickClick = document.querySelector(".select_lesson .ticks span.tick");
let SLCrossClick = document.querySelector(".select_lesson .ticks span.cross");
let SLAnotherInput = document.querySelector(".select_lesson .another-inputs");
console.log(SLAnotherInput)



class SLAddTOList {
  plusToTick() {
    // console.log('1')
    SLplusClick.classList.remove("flex");
    SLplusClick.classList.add("hidden");
    SLTickClick.classList.add('flex')
    SLTickClick.classList.remove('hidden')
    SLCrossClick.classList.add("translate", "clicked");
    SLCrossClick.classList.remove("not-clicked");


  }
  backTOPlus() {
    SLplusClick.classList.add("flex");
    SLplusClick.classList.remove("hidden");
    SLTickClick.classList.remove('flex')
    SLTickClick.classList.add('hidden')
    SLCrossClick.classList.add("not-clicked");
    SLCrossClick.classList.remove("clicked", "translate");

  }
  plusHeight() {
    SLAnotherInput.classList.remove('SLmin-height')
    SLAnotherInput.classList.add('SLplus-height')
    // civilContetn.classList.add('min-heights')

    setTimeout(() => {
      anotherInputs.classList.add('z-20')
      anotherInputs.classList.remove('z-0')
      anotherInputs.classList.remove('overflow-hidden')
    }, 500);
  }
  minesHeight() {
    SLAnotherInput.classList.add('SLmin-height')
    SLAnotherInput.classList.remove('SLplus-height')
    anotherInputs.classList.add('z-20')
    anotherInputs.classList.remove('z-0')
    anotherInputs.classList.add('overflow-hidden')
    // anotherInputs.classList.add('-z-10')
    // civilContetn.classList.remove('min-heights')

    // 

  }
}
let sLaddToList = new SLAddTOList();

SLplusClick.addEventListener("click", () => {
  sLaddToList.plusToTick();
  sLaddToList.plusHeight();
});
// tickClick.addEventListener('click',()=>{
//     sLaddToList.backTOPlus()
// })
SLCrossClick.addEventListener("click", () => {
  sLaddToList.backTOPlus();
  sLaddToList.minesHeight();
});

// queez div
let QplusClick = document.querySelector(".queez .ticks span.plus");
let QTickClick = document.querySelector(".queez .ticks span.tick");
let QCrossClick = document.querySelector(".queez .ticks span.cross");
let QAnotherInput = document.querySelector(".queez .another-inputs-two");
console.log(QAnotherInput)



class QAddTOList {
  plusToTick() {
    // console.log('1')
    QplusClick.classList.remove("flex");
    QplusClick.classList.add("hidden");
    QTickClick.classList.add('flex')
    QTickClick.classList.remove('hidden')
    QCrossClick.classList.add("translate", "clicked");
    QCrossClick.classList.remove("not-clicked");


  }
  backTOPlus() {
    QplusClick.classList.add("flex");
    QplusClick.classList.remove("hidden");
    QTickClick.classList.remove('flex')
    QTickClick.classList.add('hidden')
    QCrossClick.classList.add("not-clicked");
    QCrossClick.classList.remove("clicked", "translate");

  }
  plusHeight() {
    QAnotherInput.classList.remove('Qmin-height')
    QAnotherInput.classList.add('Qplus-height')
    // civilContetn.classList.add('min-heights')

    setTimeout(() => {
      QAnotherInput.classList.add('z-20')
      QAnotherInput.classList.remove('z-0')
      QAnotherInput.classList.remove('overflow-hidden')
    }, 500);
  }
  minesHeight() {
    QAnotherInput.classList.remove('Qplus-height')
    QAnotherInput.classList.add('Qmin-height')
    QAnotherInput.classList.add('z-20')
    QAnotherInput.classList.remove('z-0')
    QAnotherInput.classList.add('overflow-hidden')
    // anotherInputs.classList.add('-z-10')
    // civilContetn.classList.remove('min-heights')

    // 

  }
}
let qaddToList = new QAddTOList();

QplusClick.addEventListener("click", () => {
  qaddToList.plusToTick();
  qaddToList.plusHeight();
});
// tickClick.addEventListener('click',()=>{
//     qaddToList.backTOPlus()
// })
QCrossClick.addEventListener("click", () => {
  qaddToList.backTOPlus();
  qaddToList.minesHeight();
});








import {BVSelect} from '../BVSelect-VanillaJS-master/js/bvselect.js'

var mySelect = new BVSelect({
  selector: "#selectbox1",
  searchbox: true,
  placeholder: "درس ",
  search_placeholder: "جستجو"
});
var mySelect = new BVSelect({
  selector: "#selectbox2",
  searchbox: true,
  placeholder: "مبحث ",
  search_placeholder: "جستجو"
});
var mySelect = new BVSelect({
  selector: "#selectbox3",
  searchbox: true,
  placeholder: "زیر مبحث",
  search_placeholder: "جستجو"
});

// var mySelect = new BVSelect({
//   selector: "#selectbox4",
//   searchbox: true,
//   placeholder: "مبحث",
//   search_placeholder: "جستجو"
// });
var mySelect = new BVSelect({
  selector: "#selectbox5",
  searchbox: true,
  placeholder: "درس ",
  search_placeholder: "جستجو"
});
var mySelect = new BVSelect({
  selector: "#selectbox6",
  searchbox: true,
  placeholder: "مبحث ",
  search_placeholder: "جستجو"
});
var mySelect = new BVSelect({
  selector: "#selectbox7",
  searchbox: true,
  placeholder: "زیر مبحث",
  search_placeholder: "جستجو"
});

// var mySelect = new BVSelect({
//   selector: "#selectbox8",
//   searchbox: true,
//   placeholder: "مبحث",
//   search_placeholder: "جستجو"
// });
var mySelect = new BVSelect({
  selector: "#selectbox9",
  searchbox: true,
  placeholder: "انتخاب درس / مبحث و زیر مبحث",
  search_placeholder: "جستجو"
});
var mySelect = new BVSelect({
  selector: "#selectbox10",
  searchbox: true,
  placeholder: "وضعیت",
  search_placeholder: "جستجو"
});
