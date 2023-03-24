const service = require("../Services/calculator")

const isValid = (request) => {

    const monthlyInvestment = Number(request.monthlyInvestment);
    const investmentPeriod = Number(request.investmentPeriod);
    const expectedRateOfReturn = Number(request.rateOfReturn);
    const delay = Number(request.delay);

    if(Number.isNaN(monthlyInvestment) || monthlyInvestment<500 || monthlyInvestment>100000){
        return false;
    }

    if(Number.isNaN(investmentPeriod) || investmentPeriod<1 || investmentPeriod>30){
        return false;
    }

    if(Number.isNaN(expectedRateOfReturn) || expectedRateOfReturn<1 || expectedRateOfReturn>30){
        return false;
    }

    if(Number.isNaN(delay) || delay<1 || delay>120){
        return false;
    }
   
    return true;
}

const badRequest = {
    status: -1,
    message: "Something is not good",
    result: "Invalid data entered"
};

const calculate = async (req, res)=>{

    try{

        if(!isValid(req.query)){
            res.send(badRequest);
            return; 
        }
        
        const result = await service.calculate(req.query);

        if(result instanceof Error){
            res.send({status: -1, message: "Something is not good", result:result.message})
        }else{
            res.send({status: 0, message: "Result Successfull", result:result})
        }
        

    }catch(error){

        res.send({status: -1, message: "Something is not good", result:error.message})

    }
    
}

module.exports = {calculate};