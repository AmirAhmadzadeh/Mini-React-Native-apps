import * as React from "react";
import {
  StyleSheet,
  TextInput,
  TextInputChangeEventData,
  NativeSyntheticEvent,
} from "react-native";
import { Text, View } from "../components/Themed";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import axios from "axios";

// client Id
//Kx569H90MSxQYj6OVtvJjA
// api key
//-4S03BUEshi3CmtjIpflRWNT6WAOTjNLnL7aQKsU5fWyUZ-IlsQQyDu29N_s0xXS1RPkEuDxmV3O9h7D_dBmQtL3cdAVe04ut1Th2m8dgYdMdu0le30f19YcrAAlX3Yx
//
const api = axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Beare 4S03BUEshi3CmtjIpflRWNT6WAOTjNLnL7aQKsU5fWyUZ-IlsQQyDu29N_s0xXS1RPkEuDxmV3O9h7D_dBmQtL3cdAVe04ut1Th2m8dgYdMdu0le30f19YcrAAlX3Yx",
  },
});

// Create a new yelpAPI object with your API key
interface SearchBarProps {
  handleChange: (q: string) => void;
  handleSubmit: () => void;
}

function SearchBar({
  handleChange,
  handleSubmit,
}: SearchBarProps): JSX.Element {
  return (
    <View style={styles.searchBar}>
      <TouchableOpacity onPress={handleSubmit}>
        <Feather name="search" size={32} />
      </TouchableOpacity>
      <TextInput
        onChangeText={handleChange}
        placeholder="Search"
        style={styles.searchInp}
      />
    </View>
  );
}

interface ResturantFoodsProps {
  data: String;
}

function ResturantFoods({ data }: ResturantFoodsProps) {
  return (
    <View>
      <Text>{data}</Text>
    </View>
  );
}

interface Props {}
export default function ({}: Props): JSX.Element {
  const [searchQuery, setSearchQuery] = React.useState<String>("");

  React.useEffect(() => {
    submitSearch();
  }, [searchQuery]);

  async function submitSearch() {
    try {
      const res = await api.get(`/search`, {
        params: {
          limit: 50,
          term: searchQuery,
          location: "san jose",
        },
      });

      console.log("res", res.data.businesses);
    } catch (error) {
      console.log("amir is here", error);
    }
  }

  return (
    <View style={styles.container}>
      <SearchBar
        handleChange={(query: String) => setSearchQuery(query)}
        handleSubmit={submitSearch}
      />

      <ResturantFoods data={searchQuery} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBar: {
    height: 50,
    backgroundColor: "#F0F0FE",
    margin: 15,
    borderRadius: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  contentArea: {},
  searchInp: {
    fontSize: 22,
    marginLeft: 20,
    flex: 1,
    padding: 10,
  },
});
