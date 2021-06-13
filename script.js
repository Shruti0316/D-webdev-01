//list of colors
col=['Red','Blue','White','yellow','chartreuse','orange'];

//randomly assigning color to main grid items
function shuffle(){
var gitem = document.querySelectorAll('.item');
var garray=[];

function gcolor(){
    for(let i=0;i<gitem.length;++i){
        let a= Math.random()*col.length;
        let j=Math.floor(a);
        gitem[i].style.backgroundColor = col[j];
        garray.push(col[j]);
    }
}

gcolor();
tcolor();

//assignning colors to target grid
function tcolor(){
    var tarray=subset(garray,9);

    //subset of main grid
    function subset(arr,n){
        var res=new Array(n);
        var len=arr.length;
        var taken = new Array(len);
        while(n--){
          var x=Math.floor(Math.random()*len);
          res[n]=arr[x in taken? taken[x]:x];
          taken[x]= --len in taken? taken[len]:len;}
        return res;
      }
    var titem= document.querySelectorAll('.box');
        for(let i=0;i<titem.length;++i){
            titem[i].style.backgroundColor = tarray[i];
        }
    }
}
shuffle();

ob2=document.getElementById('empty');
addEventListener('click',function(ob1){
    var ob=ob1.target;
    var a=ob.id;
    ob1=document.getElementById(a);
    
    //function to find out row and col of clicked pieces
    function rc(){

        var boxes=document.getElementsByClassName('box');
        var tar=document.querySelectorAll('.it');
        
        let grid=[[tar[0],tar[1],tar[2],tar[3],tar[4]],
                    [tar[5],tar[6],tar[7],tar[8],tar[9]],
                    [tar[10],tar[11],tar[12],tar[13],tar[14]],
                    [tar[15],tar[16],tar[17],tar[18],tar[19]],
                    [tar[20],tar[21],tar[22],tar[23],tar[24]]
                ]

                for(let i=0;i<5;++i){
                    for(let j=0;j<5;++j){
                        if(grid[i][j]===ob1){
                            x= [i , j ];}
                        }   
                }       
                
                var chk=document.querySelector('#empty');
                for(let i=0;i<5;++i){
                    for(let j=0;j<5;++j){
                        if(grid[i][j]===chk){
                        y= [i , j ];} 
                    }
                }
            }

var coln= rc();
var row = x[0]+1;
var col = x[1]+1;
var erow = y[0]+1;
var ecol = y[1]+1;

adjacent();

//chking if clicked piece is adjacent to empty or not 
function adjacent(){
    if((row===erow && (col===ecol+1 || col===ecol-1)) || (col===ecol && (row===erow+1 || row===erow-1)) ){
        swap(ob1,ob2);
    }
}

//swapping the pieces
function swap(ob1,ob2){

    var next2= ob2.nextSibling;
    if(next2 == ob1 ){
        ob2.parentNode.insertBefore(ob1,ob2);
    }
    else{
        ob1.parentNode.insertBefore(ob2,ob1);
        if(next2){
            ob2.parentNode.insertBefore(ob1,next2);
        }
        else{
            ob2.parentNode.appendChild(ob1)
            }
        }
    iscomplete();
    }
});


//Count up timer in Seconds
var mytimer;
addEventListener('click',function(b){
    var sec= document.getElementById('sec');
    var b1=b.target;
    console.log(b1.className);
    if(b1.className=='start_btn'){
        clock();

    }
function clock(){
    mytimer= setInterval(myclock,1000);
    var c=0;
    function myclock(){
        ++c;    
        sec.innerHTML=pad(c);
        function pad(val){
            var valstr= val+"";
            if(valstr.length<2){
                return "Time: 0"+valstr;
            }
            else{
                return "Time: "+valstr;
            }
        }
    }
}
});

function resett(){

    var tar=document.querySelectorAll('.it');
        
    let grid=[[tar[0],tar[1],tar[2],tar[3],tar[4]],
                [tar[5],tar[6],tar[7],tar[8],tar[9]],
                [tar[10],tar[11],tar[12],tar[13],tar[14]],
                [tar[15],tar[16],tar[17],tar[18],tar[19]],
                [tar[20],tar[21],tar[22],tar[23],tar[24]]
            ]
    reswap(tar[24],ob2);
    function reswap(ob1,ob2){        
    var next2= ob2.nextSibling;
    if(next2 == ob1 ){
        ob2.parentNode.insertBefore(ob1,ob2);
    }
    else{
        ob1.parentNode.insertBefore(ob2,ob1);
        if(next2){
            ob2.parentNode.insertBefore(ob1,next2);
        }
        else{
            ob2.parentNode.appendChild(ob1)
            }
        }
    }

}

//chk if it match the target
let moves=0;
function iscomplete(){
    var boxes=document.getElementsByClassName('box');
    var tar=document.querySelectorAll('.it');
    moves++;
    document.querySelector('.move').textContent='Move: '+moves;
    if( boxes[0].style.backgroundColor===tar[6].style.backgroundColor &&
        boxes[1].style.backgroundColor===tar[7].style.backgroundColor &&
        boxes[2].style.backgroundColor===tar[8].style.backgroundColor &&
        boxes[3].style.backgroundColor===tar[11].style.backgroundColor &&
        boxes[4].style.backgroundColor===tar[12].style.backgroundColor &&
        boxes[5].style.backgroundColor===tar[13].style.backgroundColor &&
        boxes[6].style.backgroundColor===tar[16].style.backgroundColor &&
        boxes[7].style.backgroundColor===tar[17].style.backgroundColor &&
        boxes[8].style.backgroundColor===tar[18].style.backgroundColor)
        {
            //declare victory
            document.getElementById('overlay').style.display="block"
        }
}        

//keep going button function
function again(){
    document.querySelector('.move').textContent='Move: 00';
    moves=0;
    document.querySelector('#sec').textContent='Time: 00';
    clearInterval(mytimer);
    resett();
    shuffle();
    document.getElementById('overlay').style.display="none"
}
