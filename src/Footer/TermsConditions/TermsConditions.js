import Laws from './Laws.json'
export default function TermsConditions(){

    return(
        <div>
            {Laws.map((data)=> 
            {return(
                <div>
                    <h1>Terms & Conditions</h1>
                    <p>{data.terms}</p>
                </div>
            )})}
        </div>
    )
}