// In this task create a BMI calculator using JavaScript functions. The Body
// Mass Index (BMI) is a way of estimating the amount of body fat. It's used
// in medicine to calculate risk of heart disease. You can calculate it using
// the formula above, where weight divided by height squared.
//     Write a function that outputs (returns) a different message depending on
// the BMI.
//     BMI < 18.5 , the output should be: "Your BMI is <bmi>, so you are
// underweight.
//     BMI 18.5-24.9 , the output should be: "Your BMI is <bmi>, so you have
// a normal weight.
//     BMI >24.9 , the output should be: "Your BMI is <bmi>, so you are
// overweight.

function bmiCalculator(kg, m){
    if(!isNaN(kg) && !isNaN(m)){
        let bmi = kg / (m*m);
        if(bmi < 18.5){
            return "Your BMI is " + bmi + ", so you are underweight";
        } else if(bmi > 18.5 && bmi < 24.9){
            return "Your BMI is " + bmi + ", so you have a normal weight";
        } else if(bmi > 24.9){
            return "Your BMI is " + bmi + ", so you are overweight";
        }
    } else {
        return "Error. Please enter number"
    }
}
