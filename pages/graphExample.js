import { useQuery, gql } from "@apollo/client"

// This is GraphQL syntax, same thing on our UI but put into our code here
// Grabbing first 5 activeItems where there is no buyer 0x00000000
const GET_ACTIVE_ITEMS = gql`
    {
        activeItems(first: 5, where: { buyer: "0x0000000000000000000000000000000000000000" }) {
            id
            buyer
            seller
            nftAddress
            tokenId
            price
        }
    }
`

export default function GraphExample() {
    // Using this useQuery() hook
    const { loading, error, data } = useQuery(GET_ACTIVE_ITEMS)
    console.log(data)
    return <div>hi</div>
}
