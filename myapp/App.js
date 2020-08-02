import React, { useEffect, useReducer } from "react";
import { Button, View, Text, StyleSheet } from "react-native";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function Controller({ children, value, level }) {
  return (
    <View>
      <Text style={styles.wel}>
        {value} : {level}
      </Text>
      {React.Children.map(children, (child, idx) => {
        return React.cloneElement(child, {
          onPress: () =>
            idx === 0
              ? child.props.inc({ type: "INC", color: value })
              : child.props.dec({ type: "DEC", color: value }),
          color: value,
          title: idx === 0 ? "more" : "less",
        });
      })}
    </View>
  );
}

function ColorBox(props) {
  let { red, blue, green } = props.color;
  let getBackground = () => {
    return `rgb(${red} , ${green} ,${blue})`;
  };
  return (
    <View
      style={{
        width: 100,
        height: 100,
        marginTop: 20,
        backgroundColor: getBackground(),

      }}
    >
      <Text style={{color:"#fff"}}>Amir is the Best</Text>
    </View>
  );
}

let reducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return {
        ...state,
        [action.color]:
          state[action.color] + 10 < 255 ? state[action.color] + 10 : 255,
      };
    case "DEC":
      return {
        ...state,
        [action.color]:
          state[action.color] - 10 > 0 ? state[action.color] - 10 : 0,
      };
    default:
      return state;
  }
};

const initState = {
  red: 50,
  green: 50,
  blue: 50,
};

function Controllers({ children , levels  }) {
  let colors = ["red", "green", "blue"];
  return React.Children.map(children, (child, idx) => {
    return React.cloneElement(child, {
      value: colors[idx],
        level : levels[colors[idx]]
    });
  });
}
//App
export default function () {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <View style={{ marginTop: 20 }}>
      <Controllers levels={state}>
        <Controller>
          <Button inc={(action) => dispatch(action)} />
          <Button dec={(action) => dispatch(action)} />
        </Controller>

        <Controller>
          <Button inc={(action) => dispatch(action)} />
          <Button dec={(action) => dispatch(action)} />
        </Controller>

        <Controller>
          <Button inc={(action) => dispatch(action)} />
          <Button dec={(action) => dispatch(action)} />
        </Controller>
      </Controllers>
      <ColorBox color={state} />
    </View>
  );
}

const styles = StyleSheet.create({
  wel: {
    fontSize: 26,
    marginBottom: 20,
  },
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//context
