import CardSala from "../../assets/images/sala.jpeg"
import { ContainerMaster } from "./styles"


import AcUnitIcon from '@mui/icons-material/AcUnit';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import FireHydrantAltIcon from '@mui/icons-material/FireHydrantAlt';


const MasterCard = () => {
    return (
        <ContainerMaster>

            <div className="ContainerImageMaster">
                <img src={CardSala} alt="Card demostrativo" id="cardMaster" />
            </div>

            <div className="textContainer">
                <h1>Solução para sua <br /> <span className="textDecoration">casa e trabalho.</span></h1>
            </div>

            <div className="iconsContainer">
                <div>
                    <AcUnitIcon color="primary" fontSize='large' />
                    <h3>Ar</h3>
                </div>

                <div>
                    <ElectricBoltIcon color="primary" fontSize='large' />
                    <h3>Elétrica</h3>
                </div>

                <div>
                    < FireHydrantAltIcon color="primary" fontSize='large' />
                    <h3>Hidrante</h3>
                </div>
            </div>
        </ContainerMaster>
    );
};



export default MasterCard;