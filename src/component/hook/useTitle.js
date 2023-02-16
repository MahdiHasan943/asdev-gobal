import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} -Asdev global website`;
    }, [title])
};

export default useTitle;