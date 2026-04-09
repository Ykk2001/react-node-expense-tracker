import { useEffect, useState } from "react";

export const useWindowSize = () => {
    const [size, setSize] = useState([window.innerWidth, window.innerHeight])

    useEffect(() => {
        const updateSize = () => {
            setSize([window.innerWidth, window.innerHeight])
        }
        window.addEventListener('resize', updateSize)
        return () => window.removeEventListener('resize', updateSize)//This cleanup function will run before the component is removed from the DOM (unmounted) or before the effect runs again (in case the dependencies have changed).
    }, [])
    //  Return an object instead of an array for clarity
    return{
        width:size[0],
        height:size[1]
    }
    

}//usewindowsize


/*NOTES
1)No dependencies: If you omit the second argument, the effect runs after every render (initial render + every re-render).
Empty array ([]): If you pass an empty array, the effect only runs once—when the component mounts and never again unless the component is unmounted.
*/