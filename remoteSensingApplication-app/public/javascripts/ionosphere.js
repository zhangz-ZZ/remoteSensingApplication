/**
 * Created by johm-z on 2017/11/3.
 */
var orealTimeList=document.getElementsByClassName("real-time-list")[0];
orealTimeList.onclick=function (e) {
    e = e || window.event;
    e.target = e.target || e.srcElement;
    e.preventDefault ? e.preventDefault() : e.returnValue = false;

    var owhiteNight=document.getElementsByClassName("whiteNight")[0];
    //console.log(e.target);
    var orealTimeListSelect=e.target.parentNode.className;
    var ofunc_css_scaling_a=document.getElementsByClassName("func-css-scaling-a")[0].getElementsByTagName("span")[0];
    var orealTimeData_Presentation=document.getElementsByClassName("realTimeData-Presentation")[0];
    var orealTimeOverviewPresentation=document.getElementsByClassName("realTimeOverviewPresentation")[0];
    if(orealTimeListSelect=="real-time-Data"){
        e.target.setAttribute("class","active")
        owhiteNight.style.display="block";

        orealTimeData_Presentation.style.display="block";
        orealTimeOverviewPresentation.style.display="none";
    }
    else if(orealTimeListSelect=="real-time-Overview"){
        e.target.setAttribute("class","active");
        owhiteNight.style.display="none";
        ofunc_css_scaling_a.className="glyphicon glyphicon-menu-down";

        orealTimeData_Presentation.style.display="none";
        orealTimeOverviewPresentation.style.display="block";
    }
    else if(orealTimeListSelect=="func-css-scaling-a"){
        if(ofunc_css_scaling_a.className=="glyphicon glyphicon-menu-up"){
            ofunc_css_scaling_a.className="glyphicon glyphicon-menu-down";
            owhiteNight.style.display="none";
        }else if(ofunc_css_scaling_a.className=="glyphicon glyphicon-menu-down"){
            ofunc_css_scaling_a.className="glyphicon glyphicon-menu-up";
            owhiteNight.style.display="block";
        }

    }
}