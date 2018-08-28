import {Text,TouchableOpacity} from 'react-native'
import React from 'react'



const  GeneralButton = (props) => {

    return(

        <TouchableOpacity

            onPress={()=> props.functionProps()}
            style={props.styleProps}
        >

            <Text>

                {props.textProps}
            </Text>
        </TouchableOpacity>

    )

}


export default GeneralButton