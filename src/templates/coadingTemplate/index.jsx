const CoadingTemplate = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <code>
                        a) Given a random array of numbers
                        <br />
                        const numbers = [45, 30, 4, 60, 5, 4, 66, 20, 30, 60, 4]
                        <br />
                        Write the code
                        <br />
                        - To sort the array in ascending order and remove any duplicate values;
                        <br />
                        - Create a new list of numbers greater than 25
                        <br />
                        b) Given two emails joe@example.com, testuser@mail.com. Write code for following checks:
                        <br />
                        - Output the user name part from each email. Eg joe, testuser
                        <br />
                        - Check if the test keyword exists in any of these emails.
                    </code>
                    <h6>
                        Answers
                        <br />
                        a)
                    </h6>
                    <code>
                        {`const sortArrayInAscendingOrder = (array) =>{
                           return array.sort((a,b)=> {return a-b})
                        }`}
                        <br />

                        {`const removeDuplicateValuesFromArray = (array) =>{
                           return array.filter((v,i,a)=>{return a.indexOf(v) == i})
                        }`}

                        <br />

                        {`const getArrayWithValuesGreaterThan25 = (array) =>{
                           return array.filter((v)=>{return v > 25})
                        }`}

                    </code>
                    <h6>
                        Answers
                        <br />
                        b)
                    </h6>
                    Create an array and enter both email id's as a string
                    <br />
                    <code>
                        const emailsArray = ["joe@example.com", "testuser@mail.com"]
                        <br />
                        {`  const getUsernameFromEmailsAndCheckTestKewordIncludes = (emailsArray) =>{
                            return emailsArray.map((el)=>{
                                return {
                                    email:el,
                                    username:el.split("@")[0],
                                    isTestKewordIncludes : Boolean(el.includes("test"))
                                }
                            })
                        }`}
                    </code>
                    <br/>
                    <br/>
                    <br/>
                    <b>Using these functions we can solve the given test points.</b>
                </div>
            </div>
        </div>)
}
export default CoadingTemplate