import TiendasLivedata from "./TiendasLivedata";
import { tiendasDTO } from "../Models/tiendas";

export default function TiendasLivedataList(props : tiendaslivedatalistProps){
    return (
        <div className="row">
        {props.tiendas.map( tienda =>
            <TiendasLivedata{...tienda} key={tienda.codclasi}/>
            )}
        </div>
    )
}

interface tiendaslivedatalistProps {
    tiendas: tiendasDTO[];
}