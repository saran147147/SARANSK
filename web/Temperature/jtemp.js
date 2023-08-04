function calculateAC() {
    var radius = document.circle.radius.value;
    var unit = " degree Fahrenheit"
   
    var finalAC = (radius*1.8)+32;
    
    document.circle.acc.value = (finalAC.toFixed(2)+unit);

    }
    function calculateFC() {
        var fahrenh = document.fc.fahrenh.value;
        var unit = "Celsius"
        var con = 32
        var finalACC = (fahrenh-con)/1.8;
        
        document.fc.accc.value = (finalACC.toFixed(2)+unit);
    
    }