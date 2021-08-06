import dateFormat from "dateformat";

export default function(date){
    // new Date = date;

    return dateFormat(new Date(date),"mmm d, yyyy");

}