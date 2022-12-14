export const showMessage = ( isError , msg) => {

    return (
<div
 id="alert-border-4" 
 className={ "p-4 mb-4   flex rounded mt-5 bg-orange-500" }
 role="alert">
<svg 
className="flex-shrink-0 w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" ><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
<div 
className="ml-3 text-sm font-medium text-white "> {msg}
</div>
</div>
    )
}

