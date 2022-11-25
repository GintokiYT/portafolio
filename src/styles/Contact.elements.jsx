import styled from "styled-components";

export const ContactTitle = styled.h2`
  text-align: center;
  font-size: ${({theme}) => theme.fontSize.fs4};
  color: ${({theme}) => theme.color};
  margin: 30px 0;
  padding-top: 20px;
`

export const ContactForm = styled.form`
  width: 100%;
  max-width: 425px;
  margin: 0 auto;
  margin-top: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: hidden;

  textarea {
    resize: none;
    min-height: 100px;
    border: none;
    outline: none;
    padding: 10px;
    font-size: ${({theme}) => theme.fontSize.fs2};
    background-color: ${({theme}) => theme.color};
    color: ${({theme}) => theme.body};
  }

  .submit {
    border: none;
    outline: none;
    background-color: #1597e0;
    padding: 15px;
    color: #fff;
    font-size: ${({theme}) => theme.fontSize.fs2};
    cursor: pointer;
    border-radius: 10px;
    transition: all .3s ease;
    font-weight: 700;

    &:hover {
      background-color: #095ed4;
    }
  }

`;

export const FormControl = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: column;
  position: relative;

  input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    border-bottom: 1px solid #9e9e9e;
    background-color: transparent;
    color: ${({theme}) => theme.color};
    font-size: ${({theme}) => theme.fontSize.fs2};

    &:focus {
      border-color: #1597e0;
    }
  }

  label {
    position: absolute;
    transition: all .3s ease;
    display: flex;
    align-items: center;
    height: 100%;
    font-size: ${({theme}) => theme.fontSize.fs2};
    color: #9e9e9e;
  }

  .active-input {
    transform: translateY(-35px);
    font-size: ${({theme}) => theme.fontSize.fs1};
  }
`;