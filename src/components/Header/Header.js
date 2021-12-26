/**
 * 
 * 
 * 
 
<Header user={null} />

<Header user={ {firstName: 'yariv', lastName: 'katz', email: 'yariv@nerdeez.com'} } />


hello guest
hello yariv

 */


// props => {user: {...} }
export function Header(/*props*/ { 
    user = {firstName: 'Guest'}
}) {
    return (
        <header>
            <h1>
                Hello {user.firstName}
            </h1>    
        </header>
    )
}