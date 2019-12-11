import styled from 'styled-components';

export const ListContainerStyle = styled.div`
    width: calc(50% - 205px);
    height: calc(100vh - 65px);
    overflow:auto;
    margin: 0 2px;
    font-family: 'Open Sans', sans-serif;
  .nearest-list--container {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #ececec;
    padding: 1px;
    border-radius: 4px;
    position:relative;
    padding-right:100px;
    margin-bottom:10px;
  .nearest-list--image {
    height: 100px;
    width: 100px;
    position: relative;
    background-position: center;
    background-size: 100%;
    border-radius: 5px;
  }
  .nearest-list--type-icon {
    top: 15px;
    right: 20px;
    position: absolute;
    img{
      max-width: 30px;
    }
  }
  .nearest-list--details {
    width: calc(100% - 100px);
    padding-left: 14px;
    .nearest-list--time {
      background: #c9e9c8;
      color: #fff;
      padding: 1px 10px;
      border-radius: 4px;
      position: absolute;
      width: 90px;
      right: 2px;
      bottom: 2px;
      text-align: center;
      &.closed{
        background: #f88081;
      }
    }
  }
}
`;

