const planPercent = {
    tenPercent : 10,
    twentyPercent :20,
    thirtyPercent: 30,
    fortyPercent:40,
    fiftyPercent: 50
}

// Number formatter.
var formatter = new Intl.NumberFormat('fil-PH', {
  style: 'currency',
  currency: 'PHP',

});


class Downpayment {
    constructor(total, percent) {
      this.total = total;
      this.percent = percent / 100;
    }
    getDown() {
      return  this.total * this.percent;
      //  formatter.format(answer)
    }
}


class Discount {
    constructor(total, percent,downpayment, month) {
      this.total = total;
      this.percent = percent / 100;
      this.month = month;
      this.downpayment = downpayment;
    }
    getValue() {
      var answer = (this.total - (this.total * this.percent) - this.downpayment) / this.month;
      return + (Math.round(answer + "e+2")  + "e-2");
      
      // return answer.toFixed(3)
      //  formatter.format(answer)
    }
}


class ServiceFee {
  constructor(total, percent,downpayment, month) {
    this.total = total;
    this.percent = percent / 100;
    this.month = month;
    this.downpayment = downpayment;
  }
  getValue() {
    var answer = (this.total + (this.total * this.percent) - this.downpayment) / this.month;
    return +(Math.round(answer + "e+2")  + "e-2");
  }
}


// var testRemove = new RemoveNumeric('123sdasd')
// console.log(testRemove.getValue());

// class RemoveNumeric {
//   constructor(downpayment) {
//     this.downpayment = downpayment;
//   }
//   getValue() {
//     return this.downpayment.replace(/\D/g, '');
//   }
// }
 
var getTotal = () => {
  var price = document.getElementById('price').value;
  var lot_area = document.getElementById('lot_area').value;
  var total = Number(price) * Number(lot_area);
  // var answer =  formatter.format(Number(price) * Number(lot_area));
  // var total =  answer.toString().replace(/\D/g, '');
  document.getElementById('total').innerText = total;







    var getTenPercentDownpayment = new Downpayment(total, planPercent.tenPercent)
    // var answerTenPercentDownpayment = formatter.format(getTenPercentDownpayment.getDown());
    document.getElementById('planTenPercent').innerHTML = getTenPercentDownpayment.getDown();

    var getTwentyPercentDownpayment = new Downpayment(total, planPercent.twentyPercent)
    document.getElementById('planTwentyPercent').innerHTML = getTwentyPercentDownpayment.getDown();

    var getThirtyPercentDownpayment = new Downpayment(total, planPercent.thirtyPercent)
    document.getElementById('planThirtyPercent').innerHTML = getThirtyPercentDownpayment.getDown();

    var getTenFortyDownpayment = new Downpayment(total, planPercent.fortyPercent)
    document.getElementById('planFortyPercent').innerHTML = getTenFortyDownpayment.getDown();

    var getFiftyPercentDownpayment = new Downpayment(total, planPercent.fiftyPercent)
    document.getElementById('planFiftyPercent').innerHTML = getFiftyPercentDownpayment.getDown();

    // DISCOUNT
    // TWELVE MONTHS 
   
    var OneYear = {
      month :12,
      tenPercentDownpayment: document.getElementById('planTenPercent').innerText,
      twentyPercentDownpayment: document.getElementById('planTwentyPercent').innerText,
      thirtyPercentDownpayment: document.getElementById('planThirtyPercent').innerText,
      fortyPercentDownpayment: document.getElementById('planFortyPercent').innerText,
      fiftyPercentDownpayment: document.getElementById('planFiftyPercent').innerText,
      discountPercent: {
        five: 5,
        six:6,
        seven:7,
        eight:8,
        ten:10
      }
    }

    var TenPercentPlanOneYearPayment = new Discount(total, OneYear.discountPercent.five , OneYear.tenPercentDownpayment, OneYear.month )
    document.getElementById('twelveMonthsTen').innerText =  formatter.format(TenPercentPlanOneYearPayment.getValue()) 
 
    var TwentyPercentPlanOneYearPayment = new Discount(total, OneYear.discountPercent.six , OneYear.twentyPercentDownpayment, OneYear.month )
    document.getElementById('twelveMonthsTwenty').innerText = formatter.format(TwentyPercentPlanOneYearPayment.getValue())  

    var ThirtyPercentPlanOneYearPayment = new Discount(total, OneYear.discountPercent.seven , OneYear.thirtyPercentDownpayment, OneYear.month )
    document.getElementById('twelveMonthsThirty').innerText = formatter.format(ThirtyPercentPlanOneYearPayment.getValue())  

    var FortyPercentPlanOneYearPayment = new Discount(total, OneYear.discountPercent.eight , OneYear.fortyPercentDownpayment, OneYear.month )
    document.getElementById('twelveMonthsForty').innerText = formatter.format(FortyPercentPlanOneYearPayment.getValue())  

    var FiftyPercentPlanOneYearPayment = new Discount(total, OneYear.discountPercent.ten , OneYear.fiftyPercentDownpayment, OneYear.month )
    document.getElementById('twelveMonthsFifty').innerText = formatter.format(FiftyPercentPlanOneYearPayment.getValue())  


    // 24 MONTHS
    var TwoYears = {
      month :24,
      tenPercentDownpayment: document.getElementById('planTenPercent').innerText,
      twentyPercentDownpayment: document.getElementById('planTwentyPercent').innerText,
      thirtyPercentDownpayment: document.getElementById('planThirtyPercent').innerText,
      fortyPercentDownpayment: document.getElementById('planFortyPercent').innerText,
      fiftyPercentDownpayment: document.getElementById('planFiftyPercent').innerText,
      discountPercent: {
        five: 5,
        six:6,
        seven:7,
        eight:8,
        ten:10,
        zero: 0
      }
    }

    var TenPercentPlanTwoYearPayment = new Discount(total, TwoYears.discountPercent.zero , TwoYears.tenPercentDownpayment, TwoYears.month )
    document.getElementById('twentyfourMonthsTen').innerText = formatter.format(TenPercentPlanTwoYearPayment.getValue())  
 
    var TwentyPercentPlanTwoYearPayment = new Discount(total, TwoYears.discountPercent.zero , TwoYears.twentyPercentDownpayment, TwoYears.month )
    document.getElementById('twentyfourMonthsTwenty').innerText = formatter.format(TwentyPercentPlanTwoYearPayment.getValue())  

    var ThirtyPercentPlanTwoYearsPayment = new Discount(total, TwoYears.discountPercent.zero , TwoYears.thirtyPercentDownpayment, TwoYears.month )
    document.getElementById('twentyfourMonthsThirty').innerText = formatter.format(ThirtyPercentPlanTwoYearsPayment.getValue())  

    var FortyPercentPlanTwoYearsPayment = new Discount(total, TwoYears.discountPercent.zero , TwoYears.fortyPercentDownpayment, TwoYears.month )
    document.getElementById('twentyfourMonthsForty').innerText = formatter.format(FortyPercentPlanTwoYearsPayment.getValue())  

    var FiftyPercentPlanTwoYearsPayment = new Discount(total, TwoYears.discountPercent.five , TwoYears.fiftyPercentDownpayment, TwoYears.month )
    document.getElementById('twentyfourMonthsFifty').innerText = formatter.format(FiftyPercentPlanTwoYearsPayment.getValue()) 


    // SERVICE FEE
    // THREE YEARS
    var ThreeYears = {
      month :36,
      tenPercentDownpayment: document.getElementById('planTenPercent').innerText,
      twentyPercentDownpayment: document.getElementById('planTwentyPercent').innerText,
      thirtyPercentDownpayment: document.getElementById('planThirtyPercent').innerText,
      fortyPercentDownpayment: document.getElementById('planFortyPercent').innerText,
      fiftyPercentDownpayment: document.getElementById('planFiftyPercent').innerText,
      discountPercent: {
        five: 5,
        six:6,
        seven:7,
        eight:8,
        ten:10,
        zero: 0
      }
    }

    var ServiceFee_TenPercent_Plan = new ServiceFee(total, ThreeYears.discountPercent.five , ThreeYears.tenPercentDownpayment, ThreeYears.month )
    document.getElementById('servicefee_tenpercent_plan').innerText = formatter.format(ServiceFee_TenPercent_Plan.getValue())  

    var ServiceFee_TwentyPercent_Plan = new ServiceFee(total, ThreeYears.discountPercent.zero , ThreeYears.twentyPercentDownpayment, ThreeYears.month )
    document.getElementById('servicefee_twentypercent_plan').innerText = formatter.format(ServiceFee_TwentyPercent_Plan.getValue()) 

    var ServiceFee_ThirtyPercent_Plan = new ServiceFee(total, ThreeYears.discountPercent.zero , ThreeYears.thirtyPercentDownpayment, ThreeYears.month )
    document.getElementById('servicefee_thirtypercent_plan').innerText = formatter.format(ServiceFee_ThirtyPercent_Plan.getValue()) 

    var ServiceFee_FortyPercent_Plan = new ServiceFee(total, ThreeYears.discountPercent.zero , ThreeYears.fortyPercentDownpayment, ThreeYears.month )
    document.getElementById('servicefee_fortypercent_plan').innerText = formatter.format(ServiceFee_FortyPercent_Plan.getValue()) 

    var ServiceFee_FiftyPercent_Plan = new ServiceFee(total, ThreeYears.discountPercent.zero , ThreeYears.fiftyPercentDownpayment, ThreeYears.month )
    document.getElementById('servicefee_fiftypercent_plan').innerText = formatter.format(ServiceFee_FiftyPercent_Plan.getValue()) 


    var FourYears = {
      month :48,
      tenPercentDownpayment: document.getElementById('planTenPercent').innerText,
      twentyPercentDownpayment: document.getElementById('planTwentyPercent').innerText,
      thirtyPercentDownpayment: document.getElementById('planThirtyPercent').innerText,
      fortyPercentDownpayment: document.getElementById('planFortyPercent').innerText,
      fiftyPercentDownpayment: document.getElementById('planFiftyPercent').innerText,
      discountPercent: {
        five: 5,
        six:6,
        seven:7,
        eight:8,
        ten:10,
        zero: 0
      }
    }

    var ServiceFee_TenPercent_Plan_Four_Years = new ServiceFee(total, FourYears.discountPercent.six , FourYears.tenPercentDownpayment, FourYears.month )
    document.getElementById('servicefee_tenpercent_plan_four_years').innerText = formatter.format(ServiceFee_TenPercent_Plan_Four_Years.getValue())  

    var ServiceFee_TwentyPercent_Plan_Four_Years = new ServiceFee(total, FourYears.discountPercent.five , FourYears.twentyPercentDownpayment, FourYears.month )
    document.getElementById('servicefee_twentypercent_plan_four_years').innerText = formatter.format(ServiceFee_TwentyPercent_Plan_Four_Years.getValue())  

    var ServiceFee_ThirtyPercent_Plan_Four_Years = new ServiceFee(total, FourYears.discountPercent.zero , FourYears.thirtyPercentDownpayment, FourYears.month )
    document.getElementById('servicefee_thirtypercent_plan_four_years').innerText = formatter.format(ServiceFee_ThirtyPercent_Plan_Four_Years.getValue())  

    var ServiceFee_FortyPercent_Plan_Four_Years = new ServiceFee(total, FourYears.discountPercent.zero , FourYears.fortyPercentDownpayment, FourYears.month )
    document.getElementById('servicefee_fortypercent_plan_four_years').innerText = formatter.format(ServiceFee_FortyPercent_Plan_Four_Years.getValue())  

    var ServiceFee_FiftyPercent_Plan_Four_Years = new ServiceFee(total, FourYears.discountPercent.zero , FourYears.fiftyPercentDownpayment, FourYears.month )
    document.getElementById('servicefee_fiftypercent_plan_four_years').innerText = formatter.format(ServiceFee_FiftyPercent_Plan_Four_Years.getValue())  


    var FiveYears = {
      month :60,
      tenPercentDownpayment: document.getElementById('planTenPercent').innerText,
      twentyPercentDownpayment: document.getElementById('planTwentyPercent').innerText,
      thirtyPercentDownpayment: document.getElementById('planThirtyPercent').innerText,
      fortyPercentDownpayment: document.getElementById('planFortyPercent').innerText,
      fiftyPercentDownpayment: document.getElementById('planFiftyPercent').innerText,
      discountPercent: {
        five: 5,
        six:6,
        seven:7,
        eight:8,
        ten:10,
        zero: 0,
        three:3
      }
    }

    var ServiceFee_TenPercent_Plan_Five_Years = new ServiceFee(total, FiveYears.discountPercent.seven , FiveYears.tenPercentDownpayment, FiveYears.month )
    document.getElementById('servicefee_tenpercent_plan_five_years').innerText = formatter.format(ServiceFee_TenPercent_Plan_Five_Years.getValue())  

    var ServiceFee_TwentyPercent_Plan_Five_Years = new ServiceFee(total, FiveYears.discountPercent.six , FiveYears.twentyPercentDownpayment, FiveYears.month )
    document.getElementById('servicefee_twentypercent_plan_five_years').innerText = formatter.format(ServiceFee_TwentyPercent_Plan_Five_Years.getValue())  

    var ServiceFee_ThirtyPercent_Plan_Five_Years = new ServiceFee(total, FiveYears.discountPercent.five , FiveYears.thirtyPercentDownpayment, FiveYears.month )
    document.getElementById('servicefee_thirtypercent_plan_five_years').innerText = formatter.format(ServiceFee_ThirtyPercent_Plan_Five_Years.getValue())

    var ServiceFee_FortyPercent_Plan_Five_Years = new ServiceFee(total, FiveYears.discountPercent.three , FiveYears.fortyPercentDownpayment, FiveYears.month )
    document.getElementById('servicefee_fortypercent_plan_five_years').innerText = formatter.format(ServiceFee_FortyPercent_Plan_Five_Years.getValue())

    var ServiceFee_FiftyPercent_Plan_Five_Years = new ServiceFee(total, FiveYears.discountPercent.zero , FiveYears.fiftyPercentDownpayment, FiveYears.month )
    document.getElementById('servicefee_fiftypercent_plan_five_years').innerText = formatter.format(ServiceFee_FiftyPercent_Plan_Five_Years.getValue())

}







