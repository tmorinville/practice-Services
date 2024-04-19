export class LoggingService{
    logStatusChange(status:string){
        console.log(`A status change occured, the new status is ${status}`);
    }
}