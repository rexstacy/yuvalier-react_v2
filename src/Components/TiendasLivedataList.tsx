import TiendasLivedata from "./TiendasLivedata";
import { tiendasDTO } from "../Models/tiendas";

export default function TiendasLivedataList(props : tiendaslivedatalistProps){
    return (
        <>
        {props.tiendas.map( tienda =>
            <TiendasLivedata{...tienda} key={tienda.codclasi}/>
            )}
        </>
    )
}

interface tiendaslivedatalistProps {
    tiendas: tiendasDTO[];
}