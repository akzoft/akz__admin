import CustomTable from "../commons/custom_table"
import { remove_all_poppup_panel } from "./ts/help"

const Main = () => {


    return (
        <div className='main' onClick={remove_all_poppup_panel} >
            <CustomTable />
        </div>
    )
}

export default Main