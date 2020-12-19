window.onload = Init;

function Init() {
    LoadSubstances();
    SelectSubstance(Hlor);

    document.getElementById("edtQ0").value = 1.5;
    document.getElementById("edtLiquidSquare").value = 400;    
    document.getElementById("edtAfterTime").value = 2.5;
    document.getElementById("edtDist").value = 5;
    document.getElementById("edtTemp").value = 20;
    document.getElementById("edtWind").value = 3;
    Calc();
}

function SetFormsVisiblity(isVisible) {
    var visibility;
    if (isVisible == true) visibility = "block"; else visibility = "none";
    document.getElementById("CalcForm").style.display = visibility;
    document.getElementById("ResultForm").style.display = visibility;
}

const atmInverse = 0;
const atmIsoterm = 1;
const atmConvect = 2;

function GetAtmState() {
    var iTimeOfDay = document.getElementById("cbTimeOfDay").selectedIndex;
    var iClouds = document.getElementById("cbClouds").selectedIndex;
    var wind = document.getElementById("edtWind").value;
    var bSnow = document.getElementById("chbSnow").checked;

    if (iClouds == 1)
        return atmIsoterm;
    else {
        var wind = document.getElementById("edtWind").value;
        //ночь
        if (iTimeOfDay == 0) {
            return wind < 4 ? atmInverse : atmIsoterm;
        }
            //утро
        else if (iTimeOfDay == 1) {
            return (wind < 4 && bSnow) ? atmInverse : atmIsoterm;
        }
            //день
        else if (iTimeOfDay == 2) {
            return (wind >= 2 || bSnow) ? atmIsoterm : atmConvect;
        }
            //вечер
        else {
            if (wind < 2)
                return atmInverse;
            else if (wind >= 4)
                return atmIsoterm;
            else
                return (bSnow) ? atmInverse : atmIsoterm;
        }
    }
}

function GetAtmStateString() {
    switch (GetAtmState()) {
        case atmInverse: return "инверсия";
        case atmIsoterm: return "изотермия";
        case atmConvect: return "конвекция";
        default: return "Unknown";
    }
}

function interp(x1, y1, x2, y2, x) {
    return (x1 == x2) ? (y1 + y2) / 2 : y1 + (y2 - y1) * (x - x1) / (x2 - x1);
}

function GetK7_1(subst, t) {
    if (t <= -40)
        return subst.K7_1_m40;
    else if (t <= -20)
        return interp(-40, subst.K7_1_m40, -20, subst.K7_1_m20, t);
    else if (t <= 0)
        return interp(-20, subst.K7_1_m20, 0, subst.K7_1_0, t);
    else if (t <= 20)
        return interp(0, subst.K7_1_0, 20, subst.K7_1_p20, t);
    else if (t <= 40)
        return interp(40, subst.K7_1_p40, 20, subst.K7_1_p20, t);
    else
        return subst.K7_1_p40;
}

function GetK7_2(subst, t) {
    if (t <= -40)
        return subst.K7_2_m40;
    else if (t <= -20)
        return interp(-40, subst.K7_2_m40, -20, subst.K7_2_m20, t);
    else if (t <= 0)
        return interp(-20, subst.K7_2_m20, 0, subst.K7_2_0, t);
    else if (t <= 20)
        return interp(0, subst.K7_2_0, 20, subst.K7_2_p20, t);
    else if (t <= 40)
        return interp(40, subst.K7_2_p40, 20, subst.K7_2_p20, t);
    else
        return subst.K7_2_p40;
}

function GetDepth(mass, wind) {
    if (mass == 0) return 0;

    const Depth00 = new Array(0.38, 0.26, 0.22, 0.19, 0.17, 0.15, 0.14, 0.13, 0.12, 0.12, 0.11, 0.11, 0.10, 0.10, 0.10);
    const Depth01 = new Array(0.85, 0.59, 0.48, 0.42, 0.38, 0.34, 0.32, 0.30, 0.28, 0.26, 0.25, 0.24, 0.23, 0.22, 0.22);
    const Depth02 = new Array(1.25, 0.84, 0.68, 0.59, 0.53, 0.48, 0.45, 0.42, 0.40, 0.38, 0.36, 0.34, 0.33, 0.32, 0.31);
    const Depth03 = new Array(3.16, 1.92, 1.53, 1.33, 1.19, 1.09, 1.00, 0.94, 0.88, 0.84, 0.80, 0.76, 0.74, 0.71, 0.69);
    const Depth04 = new Array(4.75, 2.84, 2.17, 1.88, 1.68, 1.53, 1.42, 1.33, 1.25, 1.19, 1.13, 1.08, 1.04, 1.00, 0.97);
    const Depth05 = new Array(9.18, 5.35, 3.99, 3.28, 2.91, 2.66, 2.46, 2.30, 2.17, 2.06, 1.96, 1.88, 1.80, 1.74, 1.68);
    const Depth06 = new Array(12.53, 7.20, 5.34, 4.36, 3.75, 3.43, 3.17, 2.97, 2.80, 2.66, 2.53, 2.42, 2.37, 2.24, 2.17);
    const Depth07 = new Array(19.20, 10.83, 7.96, 6.46, 5.53, 4.88, 4.49, 4.20, 3.96, 3.76, 3.58, 3.43, 3.29, 3.17, 3.07);
    const Depth08 = new Array(29.56, 16.44, 11.94, 9.62, 8.19, 7.20, 6.48, 5.92, 5.60, 5.31, 5.06, 4.85, 4.66, 4.49, 4.34);
    const Depth09 = new Array(38.13, 21.02, 15.18, 12.18, 10.33, 9.06, 8.14, 7.42, 6.86, 6.50, 6.20, 5.94, 5.70, 5.50, 5.31);
    const Depth10 = new Array(52.67, 28.73, 20.59, 16.43, 13.88, 12.14, 10.87, 9.90, 9.12, 8.50, 8.01, 7.67, 7.37, 7.10, 6.86);
    const Depth11 = new Array(65.23, 35.35, 25.21, 20.05, 16.89, 14.79, 13.17, 11.98, 11.03, 10.23, 9.61, 9.07, 8.72, 8.40, 8.11);
    const Depth12 = new Array(81.91, 44.09, 31.30, 24.80, 20.82, 18.13, 16.17, 14.68, 13.50, 12.54, 11.74, 11.06, 10.48, 10.04, 9.70);
    const Depth13 = new Array(166, 87.79, 61.47, 48.18, 40.11, 34.67, 30.73, 27.75, 25.39, 23.49, 21.91, 20.58, 19.45, 18.46, 17.60);
    const Depth14 = new Array(231, 121, 84.50, 65.92, 54.67, 47.09, 41.63, 37.49, 34.24, 31.61, 29.44, 27.61, 26.04, 24.69, 23.50);
    const Depth15 = new Array(288, 150, 104, 81.17, 67.15, 56.72, 50.93, 45.79, 41.76, 38.50, 35.81, 35.55, 31.62, 29.95, 28.48);
    const Depth16 = new Array(363, 189, 130, 101, 83.60, 71.70, 63.16, 56.70, 51.60, 47.53, 44.15, 41.30, 38.90, 36.81, 34.98);
    const Depth17 = new Array(572, 295, 202, 157, 129, 110, 96.30, 86.20, 78.30, 71.90, 66.62, 62.20, 58.44, 55.20, 52.37);
    const Depth = new Array(Depth00, Depth01, Depth02, Depth03, Depth04, Depth05, Depth06, Depth07, Depth08, Depth09, Depth10,
        Depth11, Depth12, Depth13, Depth14, Depth15, Depth16, Depth17);

    const Masses = new Array(0.01, 0.05, 0.1, 0.5, 1, 3, 5, 10, 20, 30, 50, 70, 100, 300, 500, 700, 1000, 2000);
    if (mass < 0.01) mass = 0.01;
    else if (mass > 2000) mass = 2000;

    var MassLeftInd = 0;
    var MassRightInd = 1;
    while (!(mass >= Masses[MassLeftInd] && mass <= Masses[MassRightInd])) {
        MassLeftInd++;
        MassRightInd++;
    }

    if (wind < 1) wind = 1;
    else if (wind > 15) wind = 15;

    var WindLeftInd = Math.floor(wind) - 1;
    var WindRightInd = Math.min(WindLeftInd + 1, 14);

    var LeftMassRes = interp(WindLeftInd + 1, Depth[MassLeftInd][WindLeftInd], WindRightInd + 1, Depth[MassLeftInd][WindRightInd], wind);
    var RightMassRes = interp(WindLeftInd + 1, Depth[MassRightInd][WindLeftInd], WindRightInd + 1, Depth[MassRightInd][WindRightInd], wind);   
    return interp(Masses[MassLeftInd], LeftMassRes, Masses[MassRightInd], RightMassRes, mass);
}

function GetNu(atm, wind) {
    const NuInverse = new Array(5, 10, 16, 21);
    const NuIsoterm = new Array(6, 12, 18, 24, 29, 35, 41, 47, 53, 59, 65, 71, 76, 82, 88);
    const NuConvect = new Array(7, 14, 21, 28);
    const Nu = new Array(NuInverse, NuIsoterm, NuConvect);

    if (wind < 1) wind = 1;
    else if (wind > Nu[atm].length)
        wind = Nu[atm].length;

    var WindLeft = Math.floor(wind);
    var WindRight = Math.min(WindLeft + 1, Nu[atm].length);
    return interp(WindLeft, Nu[atm][WindLeft - 1], WindRight, Nu[atm][WindRight - 1], wind);
}

function Calc()
{
    if (document.getElementById("cbAgregate").value == 1) {
        document.getElementById("trLiquidArea").style.display = "none";
        document.getElementById("trLiquidSquare").style.display = "none";
    }
    else {
        document.getElementById("trLiquidArea").style.display = "table-row";
        if (document.getElementById("cbLiquidArea").value == 0)
            document.getElementById("trLiquidSquare").style.display = "none";
        else
            document.getElementById("trLiquidSquare").style.display = "table-row";
    }
    
    var AtmStateString = GetAtmStateString();
    document.getElementById("lblAtm").innerHTML = AtmStateString;

    var iSubst = document.getElementById("cbSubstance").selectedIndex;

    var Q0 = parseFloat(document.getElementById("edtQ0").value.replace(',', '.'));
    var t = parseFloat(document.getElementById("edtTemp").value.replace(',', '.'));
    var wind = parseFloat(document.getElementById("edtWind").value.replace(',', '.'));
    var AfterTime = parseFloat(document.getElementById("edtAfterTime").value.replace(',', '.'));
    var Dist = parseFloat(document.getElementById("edtDist").value.replace(',', '.'));
    if (isNaN(Q0) || isNaN(t) || isNaN(wind) || isNaN(AfterTime) || isNaN(Dist)) {
        SetFormsVisiblity(false);
        return;
    }
    else
        SetFormsVisiblity(true);

    document.getElementById("lblMoment").innerHTML = AfterTime;
    document.getElementById("lblMoment_2").innerHTML = AfterTime;
    document.getElementById("lblMoment_3").innerHTML = AfterTime;
    document.getElementById("lblMoment_4").innerHTML = AfterTime;
    document.getElementById("lblMoment_5").innerHTML = AfterTime;

    var Q1 = 0;
    var Q2 = 0;

    //Эквивалентное количество QЭ1 (т) АХОВ в первичном облаке 
    var K1 = Substances[iSubst].K1;
    var K3 = Substances[iSubst].K3;
    var K5 = (AtmStateString == "инверсия") ? 1 : ((AtmStateString == "изотермия") ? 0.23 : 0.08);
    var K7_1 = (document.getElementById("cbAgregate").value == 1) ? 1 : GetK7_1(Substances[iSubst], t);
    if (document.getElementById("cbAgregate").value != 2) {
        Q1 = K1 * K3 * K5 * K7_1 * Q0;
        document.getElementById("lblQ1").innerHTML = (Q1 > 0.001) ? Q1.toFixed(3) : Q1.toExponential(1);
        document.getElementById("lblK1").innerHTML = K1;
        document.getElementById("lblK3").innerHTML = K3;
        document.getElementById("lblK5").innerHTML = K5;
        document.getElementById("lblK7").innerHTML = K7_1;
        document.getElementById("lblQ0_1").innerHTML = Q0;
        document.getElementById("tableQ1").style.display = "block";
    }
    else {
        document.getElementById("tableQ1").style.display = "none";
    }

    //толщина слоя АХОВ
    var d = Substances[iSubst].RoL;
    var LiquidSquare = 0;
    var h = 0.05;
    if (document.getElementById("cbLiquidArea").value != 0) {
        LiquidSquare = document.getElementById("edtLiquidSquare").value;
        h = Q0 / LiquidSquare / d;
        document.getElementById("lbl_h").innerHTML = (h > 0.01) ? h.toFixed(2) : h.toExponential(1);
        document.getElementById("lblQ0_2").innerHTML = Q0;
        document.getElementById("lblLiquidSquare").innerHTML = LiquidSquare;
        document.getElementById("lbld").innerHTML = d;
        document.getElementById("table_h").style.display = "block";
        document.getElementById("tr_h").style.display = "none";
        document.getElementById("tr_d").style.display = "none";
    }
    else {
        document.getElementById("table_h").style.display = "none";
        document.getElementById("tr_h").style.display = "table-row";
        document.getElementById("tr_d").style.display = "table-row";
    }

    //время испарения (продолжительность поражающего действия АХОВ)
    var K2 = Substances[iSubst].K2;
    var K4 = 1 + (wind - 1) / 3;
    var K7_2 = (document.getElementById("cbAgregate").value == 1) ? 1 : GetK7_2(Substances[iSubst], t);
    var VaporingTime = 0;
    if (document.getElementById("cbAgregate").value != 1) {
        VaporingTime = h * d / (K2 * K4 * K7_2);
        document.getElementById("lblVaporingTime").innerHTML = (VaporingTime > 0.1) ? VaporingTime.toFixed(1) : VaporingTime.toExponential(1);
        document.getElementById("lblh").innerHTML = (h > 0.01) ? h.toFixed(2) : h.toExponential(1);
        document.getElementById("lbld_2").innerHTML = d;
        document.getElementById("lblK2_2").innerHTML = K2;
        document.getElementById("lblK4_2").innerHTML = K4.toFixed(3);
        document.getElementById("lblK7_2").innerHTML = K7_2.toFixed(3);
        document.getElementById("tableVaporingTime").style.display = "block";
    }
    else {
        document.getElementById("tableVaporingTime").style.display = "none";
    }

    //Эквивалентное количество QЭ2 (т) АХОВ во вторичном облаке 
    var K6 = (AfterTime < VaporingTime) ? Math.pow(AfterTime, 0.8) : ((VaporingTime < 1) ? 1 : Math.pow(VaporingTime, 0.8));
    if (document.getElementById("cbAgregate").value != 1) {
        Q2 = (1 - K1) * K2 * K3 * K4 * K5 * K6 * K7_2 * Q0 / (h * d);
        document.getElementById("lblQ2").innerHTML = (Q2 > 0.001) ? Q2.toFixed(3) : Q2.toExponential(1);
        document.getElementById("lblK1_3").innerHTML = K1;
        document.getElementById("lblK2_3").innerHTML = K2;
        document.getElementById("lblK3_3").innerHTML = K3;
        document.getElementById("lblK4_3").innerHTML = K4.toFixed(3);
        document.getElementById("lblK5_3").innerHTML = K5;
        document.getElementById("lblK6_3").innerHTML = K6.toFixed(3);
        document.getElementById("lblK7_3").innerHTML = K7_2.toFixed(3);
        document.getElementById("lblQ0_3").innerHTML = Q0;
        document.getElementById("tableQ2").style.display = "block";
        document.getElementById("trVaporingTime").style.display = "table-row";
    }
    else {
        document.getElementById("tableQ2").style.display = "none";
        document.getElementById("trVaporingTime").style.display = "none";
    }

    //Глубина зоны возможного химического заражения
    var Depth1 = GetDepth(Q1, wind);
    var Depth2 = GetDepth(Q2, wind);
    var DepthMax = Math.max(Depth1, Depth2);
    var DepthMin = Math.min(Depth1, Depth2);
    var Depth = DepthMax + 0.5 * DepthMin;
    document.getElementById("lblDepth").innerHTML = Depth.toFixed(2);
    document.getElementById("lblDepthMax").innerHTML = DepthMax.toFixed(2);
    document.getElementById("lblDepthMin").innerHTML = DepthMin.toFixed(2);
    document.getElementById("lblDepth1").innerHTML = Depth1.toFixed(2);
    document.getElementById("lblDepth2").innerHTML = Depth2.toFixed(2);

    //Предельно возможное значение глубины
    var Nu = GetNu(GetAtmState(), wind);
    var DepthLim = AfterTime * Nu;
    document.getElementById("lblDepthLim").innerHTML = DepthLim.toFixed(2);
    document.getElementById("lblAfterTime").innerHTML = AfterTime;
    document.getElementById("lblNu").innerHTML = Nu.toFixed(1);

    //Расчетная глубина зоны возможного химического заражения
    var DepthRes = Math.min(Depth, DepthLim);
    document.getElementById("lblDepthRes").innerHTML = DepthRes.toFixed(2);

    //Площадь зоны возможного химического заражения
    var Angle = NaN;
    if (wind <= 0.5) Angle = 360;
    else if (wind <= 1) Angle = 180;
    else if (wind <= 2) Angle = 90;
    else Angle = 45;
    var Square = Math.PI / 360 * DepthRes * DepthRes * Angle;
    document.getElementById("lblSquare").innerHTML = Square.toFixed(2);
    document.getElementById("lblAngle").innerHTML = Angle;

    //Время подхода облака АХОВ к заданному объекту
    var Tau_format;
    if (Dist <= Depth) {
        var Tau = Dist / Nu;
        document.getElementById("lblTau").innerHTML = Tau.toFixed(2);
        document.getElementById("lblDist").innerHTML = Dist;
        document.getElementById("lblNuTau").innerHTML = Nu.toFixed(1);
        document.getElementById("tableTau").style.display = "block";
        //час:мин
        var hours = Math.floor(Tau);
        var minutes = Math.round((Tau - hours) * 60);
        var shours = (hours == 0) ? "" : hours + " ч. ";
        var sminutes = (minutes == 0) ? "" :
            ((minutes < 10) ? "0" + minutes + " мин." : minutes + " мин.");
        Tau_format = shours + sminutes;
        document.getElementById("lblTau0000").innerHTML = Tau_format;

        document.getElementById("trDepthMessage").style.display = "none";
        document.getElementById("trOutTau").style.display = "table-row";
    }
    else {
        document.getElementById("tableTau").style.display = "none";
        document.getElementById("trDepthMessage").style.display = "table-row";
        document.getElementById("trOutTau").style.display = "none";
        trDepthMessage
    }

    //вывод
    document.getElementById("outDepth").innerHTML = Depth.toFixed(2);
    document.getElementById("outTau0000").innerHTML = Tau_format;
    document.getElementById("outVaporingTime").innerHTML = (VaporingTime > 0.1) ? VaporingTime.toFixed(1) : VaporingTime.toExponential(1);
    document.getElementById("outDepthRes").innerHTML = DepthRes.toFixed(2);
    document.getElementById("outSquare").innerHTML = Square.toFixed(2);

    var ctx = document.getElementById("myCanvas").getContext("2d");
    var cWidth = 500; var cHeight = 300;
    ctx.clearRect(0, 0, cWidth, cHeight);

    var x0 = cHeight / 2 + 3; var y0 = cHeight / 2;
    var angl = 2 * Math.PI * Angle / 360 / 2;

    //внешняя зона
    var Rmax = cHeight / 2 - 3;
    ctx.beginPath();
    ctx.strokeStyle = "#808080";
    ctx.arc(x0, y0, Rmax, -angl, angl);
    ctx.stroke();
    ctx.lineTo(x0, y0);
    var x1 = x0 + Rmax * Math.cos(angl);
    var y1 = y0 - Rmax * Math.sin(angl);
    ctx.lineTo(x1, y1);
    if (Angle != 360)
        ctx.stroke();
    var grd = ctx.createRadialGradient(x0, y0, 0, x0, y0, Rmax);
    grd.addColorStop(0, "#FF2000");
    grd.addColorStop(1, "#FFFF60");
    ctx.fillStyle = grd;
    ctx.fill();

    //источник
    ctx.beginPath();
    ctx.arc(x0, y0, 5, 0, 2 * Math.PI);
    ctx.fillStyle = "#000000";
    ctx.fill();

    //внутренняя зона
    var r = Rmax * DepthRes / Depth;
    if (DepthRes < Depth) {
        ctx.beginPath();
        ctx.strokeStyle = "#000000"
        ctx.arc(x0, y0, r, -angl, angl);
        ctx.stroke();
        ctx.lineTo(x0, y0);
        x1 = x0 + r * Math.cos(angl);
        y1 = y0 - r * Math.sin(angl);
        ctx.lineTo(x1, y1);
        if (Angle != 360)
            ctx.stroke();
    }

    //внешний радиус
    x1 = x0 + Rmax * Math.cos(0.25);
    y1 = y0 - Rmax * Math.sin(0.25);
    ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.lineTo(x1, y1);
    ctx.lineTo(x1 - 15, y1);
    ctx.moveTo(x1, y1);
    ctx.lineTo(x1 - 13, y1 + 8);
    ctx.strokeStyle = "#303030";
    ctx.stroke();
    ctx.font = "12pt Arial";
    ctx.fillText("Гмакс. = " + Depth.toFixed(2) + " км", x1 + 5, y1);

    //внутренний радиус
    x1 = x0 + r * Math.cos(0.2);
    y1 = y0 + r * Math.sin(0.2);
    ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.lineTo(x1, y1);
    ctx.lineTo(x1 - 13, y1 - 7);
    ctx.moveTo(x1, y1);
    ctx.lineTo(x1 - 15, y1 + 2);
    ctx.strokeStyle = "#303030";
    ctx.stroke();
    ctx.font = "12pt Arial";
    ctx.fillText("Г (Ч+" + AfterTime + ") = " + DepthRes.toFixed(2) + " км", x1 + 5, y1 + 10);

    //ветер
    ctx.beginPath();
    x0 = cHeight + 20; y0 = 20;
    ctx.moveTo(x0, y0);
    x1 = cWidth - 80; y1 = y0;
    ctx.lineTo(x1, y1);
    ctx.lineTo(x1 - 30, y1 - 5);
    ctx.moveTo(x1, y1);
    ctx.lineTo(x1 - 30, y1 + 5);
    ctx.strokeStyle = "#0080FF";
    ctx.stroke();
    ctx.font = "12pt Arial";
    ctx.fillStyle = "#0080FF";
    ctx.fillText(wind + " м/с", x0 + 20, y1 + 20);
}


