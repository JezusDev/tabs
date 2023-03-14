import { SIGN_UP_FIELDS } from "../../config/fields";
import Columns from "../block/columns/columns";
import Container from "../container/container";
import Input from "../input/input";


const SignUp = () => {
    return (
      <>
        <Container>
          <div>
            <Columns
              left={
                <>
                  {SIGN_UP_FIELDS.map(field => {
                    return <Input type={field.type} placeholder={field.placeholder} title={field.title} />;
                  })}
                </>
              }
                        right={<>{
                        }</>}
            ></Columns>
          </div>
        </Container>
      </>
    );
};

export default SignUp