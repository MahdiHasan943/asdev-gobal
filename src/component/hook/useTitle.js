import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} -ASDEV81 Global Website`;
    }, [title])
};

export default useTitle;