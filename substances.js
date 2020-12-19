var Akrolein = {
    Name: "Акролеин",
    RoG: NaN, RoL: 0.839, Tkip: 52.7, Toxi: 0.2,
    K1: 0, K2: 0.013, K3: 0.75,
    K7_1_m40: 0.1, K7_1_m20: 0.2, K7_1_0: 0.4, K7_1_p20: 1, K7_1_p40: 2.2,
    K7_2_m40: 0.1, K7_2_m20: 0.2, K7_2_0: 0.4, K7_2_p20: 1, K7_2_p40: 2.2
}
var Ammiak_davl = {
    Name: "Аммиак (хранение под давлением)",
    RoG: 0.0008, RoL: 0.681, Tkip: -33.42, Toxi: 0.15,
    K1: 0.18, K2: 0.025, K3: 0.04,
    K7_1_m40: 0, K7_1_m20: 0.3, K7_1_0: 0.6, K7_1_p20: 1, K7_1_p40: 1.4,
    K7_2_m40: 0.9, K7_2_m20: 1, K7_2_0: 1, K7_2_p20: 1, K7_2_p40: 1
}
var Ammiak_iso = {
    Name: "Аммиак (изотермическое хранение)",
    RoG: NaN, RoL: 0.681, Tkip: -33.42, Toxi: 0.15,
    K1: 0.01, K2: 0.025, K3: 0.04,
    K7_1_m40: 0, K7_1_m20: 1, K7_1_0: 1, K7_1_p20: 1, K7_1_p40: 1,
    K7_2_m40: 0.9, K7_2_m20: 1, K7_2_0: 1, K7_2_p20: 1, K7_2_p40: 1
}
var Acetonotril = {
    Name: "Ацетонитрил",
    RoG: NaN, RoL: 0.786, Tkip: 81.6, Toxi: 21.6,
    K1: 0, K2: 0.004, K3: 0.028,
    K7_1_m40: 0.02, K7_1_m20: 0.1, K7_1_0: 0.3, K7_1_p20: 1, K7_1_p40: 2.6,
    K7_2_m40: 0.02, K7_2_m20: 0.1, K7_2_0: 0.3, K7_2_p20: 1, K7_2_p40: 2.6

}
var Acetonciangidrin= {
    Name: "Ацетонциангидрин",
    RoG: NaN, RoL: 0.932 , Tkip: 120, Toxi: 1.9 ,
    K1: 0, K2: 0.002, K3: 0.316,
    K7_1_m40: 0, K7_1_m20: 0, K7_1_0: 0.3, K7_1_p20: 1, K7_1_p40: 1.5,
    K7_2_m40: 0, K7_2_m20: 0, K7_2_0: 0.3, K7_2_p20: 1, K7_2_p40: 1.5
}
var Vodorod_M = {
    Name: "Водород мышьяковистый",
    RoG: 0.0035, RoL: 1.64, Tkip: -62.47, Toxi: 0.2,
    K1: 0.17, K2: 0.054, K3: 0.857,
    K7_1_m40: 0.3, K7_1_m20: 0.5, K7_1_0: 0.8, K7_1_p20: 1, K7_1_p40: 1.2,
    K7_2_m40: 1, K7_2_m20: 1, K7_2_0: 1, K7_2_p20: 1, K7_2_p40: 1
}
var Vodorod_F = {
    Name: "Водород фтористый",
    RoG: NaN, RoL: 0.989, Tkip: 19.52, Toxi: 4,
    K1:0 , K2: 0.028, K3: 0.15,
    K7_1_m40: 0.1, K7_1_m20: 0.2, K7_1_0: 0.5, K7_1_p20: 1, K7_1_p40: 1,
    K7_2_m40: 0.1, K7_2_m20: 0.2, K7_2_0: 0.5, K7_2_p20: 1, K7_2_p40: 1 
}
var Vodorod_H = {
    Name: "Водород хлористый",
    RoG: 0.0016, RoL: 1.191, Tkip: -85.10, Toxi: 2,
    K1: 0.28, K2: 0.037, K3: 0.30,
    K7_1_m40: 0.4, K7_1_m20: 0.6, K7_1_0: 0.8, K7_1_p20: 1, K7_1_p40: 1.2,
    K7_2_m40: 1, K7_2_m20: 1, K7_2_0: 1, K7_2_p20: 1, K7_2_p40: 1 
}
var Vodorod_B = {
    Name: "Водород бромистый",
    RoG: 0.0036, RoL: 1.490, Tkip: -66.77, Toxi: 2.4,
    K1: 0.13, K2: 0.055, K3:6.0,
    K7_1_m40: 0.2, K7_1_m20: 0.5, K7_1_0: 0.8, K7_1_p20: 1, K7_1_p40: 1.2,
    K7_2_m40: 1, K7_2_m20: 1 , K7_2_0: 1, K7_2_p20:1, K7_2_p40: 1
}
var Vodorod_C = {
    Name: "Водород цианистый",
    RoG: NaN, RoL: 0.687, Tkip: 25.7, Toxi: 0.2,
    K1: 0, K2: 0.026, K3: 3,
    K7_1_m40: 0, K7_1_m20: 0, K7_1_0: 0.4, K7_1_p20: 1, K7_1_p40: 1.3,
    K7_2_m40: 0, K7_2_m20: 0, K7_2_0: 0.4, K7_2_p20: 1, K7_2_p40: 1.3 
}
var Dietilamin = {
    Name: "Диметиламин",
    RoG: 0.0020, RoL: 0.680, Tkip : 6.9, Toxi: 1.2,
    K1: 0.06, K2: 0.041, K3: 0.5,
    K7_1_m40: 0, K7_1_m20: 0, K7_1_0: 0, K7_1_p20: 1, K7_1_p40: 2.5,
    K7_2_m40: 0.1, K7_2_m20: 0.3, K7_2_0: 0.8, K7_2_p20: 1, K7_2_p40: 1 
}
var Metilamin = {
    Name: "Метиламин",
    RoG: 0.0014, RoL: 0.699, Tkip: -6.5, Toxi: 1.2,
    K1: 0.13, K2: 0.034, K3: 0.5,
    K7_1_m40: 0, K7_1_m20: 0, K7_1_0: 0.5, K7_1_p20: 1, K7_1_p40: 2.5,
    K7_2_m40: 0.3, K7_2_m20: 0.7, K7_2_0: 1, K7_2_p20: 1, K7_2_p40: 1 
}
var Metil_B = {
    Name: "Метил бромистый",
    RoG: NaN, RoL: 1.732, Tkip: 3.6, Toxi: 1.2,
    K1: 0.04, K2: 0.039, K3: 0.5,
    K7_1_m40: 0, K7_1_m20: 0, K7_1_0: 0, K7_1_p20: 1, K7_1_p40: 2.3,
    K7_2_m40: 0.2, K7_2_m20: 0.4, K7_2_0: 0.9, K7_2_p20: 1, K7_2_p40: 1
}
var Metil_H = {
    Name: "Метил хлористый",
    RoG: 0.0023, RoL: 0.983, Tkip: -23.76, Toxi: 10.8,
    K1: 0.125, K2: 0.044, K3: 0.056,
    K7_1_m40: 0, K7_1_m20: 0.1, K7_1_0: 0.6, K7_1_p20: 1, K7_1_p40: 1.5,
    K7_2_m40: 0.5, K7_2_m20: 1, K7_2_0: 1, K7_2_p20: 1, K7_2_p40: 1
}
var Metilakrilat = {
    Name: "Метилакрилат",
    RoG: NaN, RoL: 0.953, Tkip: 80.2, Toxi: 6,
    K1: 0, K2: 0.005, K3: 0.025,
    K7_1_m40: 0.1, K7_1_m20: 0.2, K7_1_0: 0.4, K7_1_p20: 1, K7_1_p40: 3.1,
    K7_2_m40: 0.1, K7_2_m20: 0.2, K7_2_0: 0.4, K7_2_p20: 1, K7_2_p40: 3.1 
}
var Metilmerkaptan = {
    Name: "Метилмеркаптан",
    RoG: NaN, RoL: 0.867, Tkip: 5.95, Toxi: 1.7,
    K1: 0.06, K2: 0.043, K3: 0.353,
    K7_1_m40: 0, K7_1_m20: 0, K7_1_0: 0, K7_1_p20: 1, K7_1_p40: 2.4,
    K7_2_m40: 0.1, K7_2_m20: 0.3, K7_2_0: 0.8, K7_2_p20: 1, K7_2_p40: 1 
}
var NAK = {
    Name: "Нитрил акриловой кислоты",
    RoG: NaN, RoL: 0.806, Tkip: 77.3, Toxi: 0.75,
    K1: 0, K2: 0.007, K3: 0.80,
    K7_1_m40: 0.04, K7_1_m20: 0.1, K7_1_0: 0.4, K7_1_p20: 1, K7_1_p40: 2.4,
    K7_2_m40: 0.04, K7_2_m20: 0.1, K7_2_0: 0.4, K7_2_p20: 1, K7_2_p40: 2.4 
}
var NO = {
    Name: "Окислы азота",
    RoG: NaN , RoL: 1.491, Tkip: 21.0, Toxi: 1.5,
    K1: 0, K2: 0.040, K3: 0.40,
    K7_1_m40: 0, K7_1_m20: 0, K7_1_0: 0.4, K7_1_p20: 1, K7_1_p40: 1,
    K7_2_m40: 0, K7_2_m20: 0, K7_2_0: 0.4, K7_2_p20: 1, K7_2_p40: 1 
}
var OE = {
    Name: "Окись этилена",
    RoG: NaN, RoL: 0.882, Tkip: 10.7, Toxi: 2.2,
    K1: 0.05, K2: 0.041, K3: 0.27,
    K7_1_m40: 0, K7_1_m20: 0, K7_1_0: 0, K7_1_p20: 1, K7_1_p40: 3.2,
    K7_2_m40: 0.1, K7_2_m20: 0.3, K7_2_0: 0.7, K7_2_p20: 1 , K7_2_p40: 1 
}
var SA = {
    Name: "Сернистый ангидрид",
    RoG: 0.0029, RoL: 1.462, Tkip: -10.1, Toxi: 1.8,
    K1: 0.11, K2: 0.049, K3: 0.333,
    K7_1_m40: 0, K7_1_m20: 0, K7_1_0: 0.3, K7_1_p20: 1, K7_1_p40: 1.7,
    K7_2_m40: 0.2, K7_2_m20: 0.5, K7_2_0: 0.3, K7_2_p20: 1, K7_2_p40:1 
}
var Serovodorod = {
    Name: "Сероводород",
    RoG: 0.0015, RoL: 0.964, Tkip: -60.35, Toxi: 16.1,
    K1: 0.27, K2: 0.042, K3: 0.036,
    K7_1_m40: 0.3, K7_1_m20: 0.5, K7_1_0: 0.8, K7_1_p20: 1, K7_1_p40: 1.2,
    K7_2_m40: 1, K7_2_m20: 1, K7_2_0: 1, K7_2_p20: 1, K7_2_p40: 1
}
var Serouglerod = {
    Name: "Сероуглерод",
    RoG: NaN, RoL: 1.263, Tkip: 46.2, Toxi: 45,
    K1:0, K2: 0.021, K3: 0.013,
    K7_1_m40: 0.1, K7_1_m20: 0.2, K7_1_0: 0.4, K7_1_p20: 1, K7_1_p40: 2.1,
    K7_2_m40: 0.1, K7_2_m20: 0.2, K7_2_0: 0.4, K7_2_p20: 1, K7_2_p40: 2.1 
}
var HCl = {
    Name: "Соляная кислота (концентрированная)",
    RoG: NaN, RoL: 1.198, Tkip: NaN, Toxi: 2,
    K1: 0, K2: 0.021, K3: 0.30,
    K7_1_m40: 0, K7_1_m20: 0.1, K7_1_0: 0.3, K7_1_p20: 1, K7_1_p40: 1.6,
    K7_2_m40: 0, K7_2_m20: 0.1, K7_2_0: 0.3, K7_2_p20: 1, K7_2_p40: 1.6
}
var Trimetilamin = {
    Name: "Триметиламин",
    RoG: NaN, RoL: 0.671, Tkip: 2.9, Toxi: 6,
    K1: 0.07, K2: 0.047, K3: 0.1,
    K7_1_m40: 0, K7_1_m20: 0, K7_1_0: 0, K7_1_p20: 1, K7_1_p40: 2.2,
    K7_2_m40: 0.1, K7_2_m20: 0.4, K7_2_0: 0.9, K7_2_p20: 1, K7_2_p40: 1 
}
var Formaldegid = {
    Name: "Формальдегид",
    RoG: NaN, RoL: 0.815, Tkip: -19.0, Toxi: 0.6,
    K1: 0.19, K2: 0.034, K3: 1,
    K7_1_m40: 0, K7_1_m20: 0, K7_1_0: 0.5, K7_1_p20: 1, K7_1_p40: 1.5,
    K7_2_m40: 0.4, K7_2_m20: 1, K7_2_0: 1, K7_2_p20: 1, K7_2_p40: 1 
}
var Fosgen = {
    Name: "Фосген",
    RoG: 0.0035, RoL: 1.432, Tkip: 8.2, Toxi: 0.6,
    K1: 0.05, K2: 0.061, K3: 1 ,
    K7_1_m40: 0, K7_1_m20: 0, K7_1_0: 0, K7_1_p20: 1, K7_1_p40: 2.7,
    K7_2_m40: 0.1, K7_2_m20: 0.3, K7_2_0: 0.7, K7_2_p20: 1, K7_2_p40: 1	
}
var Ftor = {
    Name: "Фтор",
    RoG: 0.0017, RoL: 1.512, Tkip: -188.2, Toxi: 0.2,
    K1: 0.95, K2: 0.038, K3: 3,
    K7_1_m40: 0.7, K7_1_m20: 0.8, K7_1_0: 0.9, K7_1_p20: 1, K7_1_p40: 1.1,
    K7_2_m40: 1, K7_2_m20: 1, K7_2_0: 1, K7_2_p20: 1, K7_2_p40: 1 
}
var Fosfor_T = {
    Name: "Фосфор треххлористый",
    RoG: NaN , RoL: 1.570, Tkip: 75.3, Toxi: 3,
    K1: 0, K2: 0.01, K3: 0.2,
    K7_1_m40: 0.1, K7_1_m20: 0.2, K7_1_0: 0.4, K7_1_p20: 1, K7_1_p40: 2.3,
    K7_2_m40: 0.1, K7_2_m20: 0.2, K7_2_0: 0.4, K7_2_p20: 1, K7_2_p40: 2.3
}
var Fosfor_H = {
    Name: "Фосфора хлорокись",
    RoG: NaN, RoL: 1.675, Tkip: 107.2, Toxi: 0.06,
    K1: 0, K2: 0.003, K3: 10,
    K7_1_m40: 0.05, K7_1_m20: 0.1, K7_1_0: 0.3, K7_1_p20: 1, K7_1_p40: 2.6,
    K7_2_m40: 0.05, K7_2_m20: 0.1, K7_2_0: 0.3, K7_2_p20: 1, K7_2_p40: 2.6 
}
var Hlor = {
    Name: "Хлор",
    RoG: 0.0032, RoL: 1.553, Tkip: -34.1, Toxi: 0.6,
    K1: 0.18, K2: 0.052, K3: 1,
    K7_1_m40: 0, K7_1_m20: 0.3, K7_1_0: 0.6, K7_1_p20: 1, K7_1_p40: 1.4,
    K7_2_m40: 0.9, K7_2_m20: 1, K7_2_0: 1, K7_2_p20: 1, K7_2_p40: 1
}
var Hlorpikrin = {
    Name: "Хлорпикрин",
    RoG: NaN , RoL: 1.658 , Tkip: 112.3 , Toxi: 0.02 ,
    K1: 0, K2: 0.002, K3: 30, 
    K7_1_m40: 0.03, K7_1_m20: 0.1, K7_1_0: 0.3, K7_1_p20: 1, K7_1_p40: 2.9,
    K7_2_m40: 0.03, K7_2_m20: 0.1, K7_2_0: 0.3, K7_2_p20: 1, K7_2_p40: 2.9 
}
var Hlorcian = {
    Name: "Хлорциан",
    RoG: 0.0021, RoL: 1.220, Tkip: 12.6, Toxi: 0.75,
    K1: 0.04, K2: 0.048, K3: 0.80,
    K7_1_m40: 0, K7_1_m20: 0, K7_1_0: 0, K7_1_p20: 1, K7_1_p40: 3.9,
    K7_2_m40: 0, K7_2_m20: 0, K7_2_0: 0.6, K7_2_p20: 1, K7_2_p40: 1
}
var Etilenemin = {
    Name: "Этиленимин",
    RoG: NaN, RoL: 0.838, Tkip: 55.0, Toxi: 4.8,
    K1: 0, K2: 0.009, K3: 0.125,
    K7_1_m40: 0.05, K7_1_m20: 0.1, K7_1_0: 0.4, K7_1_p20: 1, K7_1_p40: 2.2,
    K7_2_m40: 0.05, K7_2_m20: 0.1, K7_2_0: 0.4, K7_2_p20: 1, K7_2_p40: 2.2 
}
var Etilensulfid = {
    Name: "Этиленсульфид",
    RoG: NaN, RoL: 1.005, Tkip: 55.0, Toxi: 0.1,
    K1: 0, K2: 0.013, K3: 6.0,
    K7_1_m40: 0.05, K7_1_m20: 0.1, K7_1_0: 0.4, K7_1_p20: 1, K7_1_p40: 2.2,
    K7_2_m40: 0.05, K7_2_m20: 0.1, K7_2_0: 0.4, K7_2_p20: 1, K7_2_p40: 2.2 
}
var Etilmerkaptan = {
    Name: "Этилмеркаптан",
    RoG: NaN, RoL: 0.839, Tkip: 35, Toxi: 2.2,
    K1: 0, K2: 0.028, K3:0.27,
    K7_1_m40: 0.1, K7_1_m20: 0.2, K7_1_0: 0.5, K7_1_p20: 1, K7_1_p40: 1.7,
    K7_2_m40: 0.1, K7_2_m20: 0.2, K7_2_0: 0.5, K7_2_p20: 1, K7_2_p40: 1.7 
}
var Substances = new Array (
    Akrolein,
    Ammiak_davl,
    Ammiak_iso,
	Acetonotril,
	Acetonciangidrin,
	Vodorod_M,
	Vodorod_F,
	Vodorod_H,
	Vodorod_B,
	Vodorod_C,
	Dietilamin,
	Metilamin,
	Metil_B,
	Metil_H,
	Metilakrilat,
	Metilmerkaptan,
	NAK,
	NO,
	OE,
	SA,
	Serovodorod,
	Serouglerod,
	HCl,
	Trimetilamin,
	Formaldegid,
	Fosgen,
	Ftor,
	Fosfor_T,
	Fosfor_H,
    Hlor,
	Hlorpikrin,
	Hlorcian,
	Etilenemin,
	Etilensulfid,
	Etilmerkaptan	
)

function LoadSubstances() {
    document.getElementById("cbSubstance").options.length = 0;
    for (var i = 0; i < Substances.length; i++)
        document.getElementById("cbSubstance").options[i] = new Option(Substances[i].Name);
}

function SelectSubstance(subst) {
    var len = document.getElementById("cbSubstance").options.length;
    for (i = 0; i < len; i++) {
        if (document.getElementById("cbSubstance").options[i].innerHTML == subst.Name) {
            document.getElementById("cbSubstance").selectedIndex = i;
            break;
        }
    }
}