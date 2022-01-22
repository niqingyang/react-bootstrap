<Form>
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Form.Label column sm="2">
      Email
    </Form.Label>
    <Col sm="10">
      <Form.Input plaintext readOnly defaultValue="email@example.com" prefix="@" suffix="$"/>
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Password
    </Form.Label>
    <Col sm="10">
      <Form.Input type="password" placeholder="Password" prefix="@" suffix="$"/>
    </Col>
  </Form.Group>
</Form>;
