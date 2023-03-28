import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} -ASDEV81 Club Asaba Official Website`;
    }, [title])
};

export default useTitle;