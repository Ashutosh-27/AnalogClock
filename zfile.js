function themechanger(){
    document.body.classList.toggle('dark') 
    let i = document.getElementById('i')
    if(i.classList.contains('bx-sun')){
      i.classList.remove('bx-sun')
      i.classList.add('bx-moon')
      i.style.color = 'white'
    }
    else{
      i.classList.remove('bx-moon')
      i.classList.add('bx-sun')
      i.style.color = 'black'
    }
  }



setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();

    hrotation = 30 * htime + 0.5 * mtime;
    mrotation = 6* mtime;
    srotation = 6 * stime;


    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);