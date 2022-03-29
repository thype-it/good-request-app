import styled from "styled-components";

//assets
import { ReactComponent as SK } from "../../assets/flags/sk.svg";
import { ReactComponent as CZ } from "../../assets/flags/cz.svg";

const Flag = styled.div`
height: 16px;
width: 21px;
margin-right: 6px;
`;

const Wrapper = styled.div `
    display: flex;
    vertical-align: middle;
    width: 62px;
    p {
        font-size: .9em;
    }
`;

const CountryNum = ({code}) => {

    const countries = new Map();
    countries.set('sk', new Map()
        .set('code', '+421')
        .set('img', <SK/>)
    );
    countries.set('cz', new Map()
        .set('code', '+420')
        .set('img', <CZ/>)
    );

    return(
        <Wrapper>
            <Flag>
                {countries.get(code).get('img')}
            </Flag>
            <p>{countries.get(code).get('code')}</p>
        </Wrapper>
    )
}

export default CountryNum;