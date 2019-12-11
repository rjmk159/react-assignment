import styled from 'styled-components';

export const Container = styled.div`
  background: #ECECEC;
`;
export const Wrapper = styled.div`
    width:100%;
    max-width:100%;
    margin:0 auto;
    float:none;
    background: #fff;
    border-right: 1px solid rgba(98, 87, 163, 0.3);
    border-left: 1px solid rgba(98, 87, 163, 0.3);
    height:100vh;
    overflow:hidden;
    position: relative;
    .types--container{
      width:200px;
      float:left;
      background: #ececec;
      padding: 14px;
      height: calc(100vh - 100px);
      overflow: auto;
      label {
        width: 100%;
        display: block;
        padding-bottom: 13px;
        font-family: 'Open Sans', sans-serif;
        input{
          padding: 0;
          background: #4a96f3;
          width: 20px;
          height: 20px;
          margin-left: 0;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          color: #cfd3d7;
          -webkit-appearance: none;
          border: 1px solid #979797;
          margin-right: 8px;
          top: 7px;
          &:checked{
            &:after {
              content: '';
              position: absolute;
              width: 9px;
              height: 4px;
              top: 5px;
              left: 3px;
              border: 1px solid #fff;
              border-top: 0;
              border-right: 0;
              transform: rotate(-45deg);
              -webkit-transform: rotate(-45deg);
              -moz-transform: rotate(-45deg);
              -o-transform: rotate(-45deg);
              -ms-transform: rotate(-45deg);
           }
          }
        }
      }
      .types--searchbox input {
        height: 28px;
        padding: 5px 10px;
        border: 0;
        border-radius: 6px;
        margin-right: 10px;
        font-size: 18px;
      }
    
      .types--searchbox {
          position: absolute;
          top: 25px;
          z-index: 10;
      }
    }

`;

