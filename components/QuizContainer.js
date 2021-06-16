

import React, { useState } from 'react'
import { Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { Checkbox } from 'semantic-ui-react'
import dataQuestions from './questions.json'
import { Button } from 'semantic-ui-react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';


function ContainerExampleContainer() {
    let [counter, setCounter] = useState(0);
    const [checkedItems, setCheckedItems] = useState(new Map());

    function nextElement() {
        if (counter >= (dataQuestions.length - 2)) {
            { document.getElementById('nextBtn').innerHTML = "Finish" }
            setCounter(counter = counter + 1)
            
        } else {
            setCounter(counter = counter + 1)
        }

    }
    function previousElement() {
        if (counter > 0) {
            setCounter(counter = counter - 1)
        }
    }



    return (
        <div>
            <Container>
                <Card>
                    <Card.Header className="text-center" as="h5">Quiz</Card.Header>
                    <Card.Body>
                        <Card.Title>{dataQuestions[counter].id}.{dataQuestions[counter].question}</Card.Title>
                        <Card.Text>
                            {dataQuestions[counter].options.map((options) => (
                                Object.values(options).map((dataInside) => (
                                    <div>
                                        <br></br>
                                        <Checkbox radio label={dataInside} value={dataInside} onChange={(e, data) => {
                                            setCheckedItems(...checkedItems,data.value);
                                            console.log(checkedItems)
                                        }} />
                                    </div>
                                ))
                            )
                            )}
                        </Card.Text>
                        <Button variant="secondary" onClick={previousElement}>Previous</Button>
                        <Button id="nextBtn" variant="success" onClick={nextElement}>Next</Button>
                        <Card.Footer>Total Questions {dataQuestions[counter].id}/{dataQuestions.length}</Card.Footer>
                    </Card.Body>
                </Card>

            </Container>
        </div>
    )
}

export default ContainerExampleContainer