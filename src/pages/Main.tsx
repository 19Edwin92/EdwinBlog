import React, { useState } from 'react'
import styled from 'styled-components'
import { InfoBoolean } from '../libs/types/componentsProps'
import { useNavigate } from 'react-router-dom'

function Main() {
  const [naiState, setNaviState] = useState<boolean>(false)
  const navigate = useNavigate()
  return (
    <OutLine>
          <Container>
            <NavOutLine info={naiState}> {/* Navi */}
              <NavContainer>
                <NavInnerWrap>
                  <NavInner>
                    <NavContent>
                      <Profile>
                        <div onClick={()=>setNaviState(pre => !pre)}>버튼</div>
                      </Profile>
                      <Lists>
                        <List>
                          <div className='layout'>
                            <div className='icon'>아</div>
                            <div className='text'>검색리스트1</div>
                          </div>
                        </List>
                        <List>
                          <div className='layout'>
                            <div className='icon'>아</div>
                            <div className='text'>검색리스트2</div>
                          </div>
                        </List>
                        <List>
                          <div className='layout'>
                            <div className='icon'>아</div>
                            <div className='text' onClick={()=> navigate('/main3')}>디바운스 연습</div>
                          </div>
                        </List>
                        <List>
                          <div className='layout'>
                            <div className='icon'>S</div>
                            <div className='text' onClick={()=> navigate('/styledcomponents')}>스타일드컴포넌트</div>
                          </div>
                        </List>
                      </Lists>
                      <SubLists>
                        <nav>
                          <SubList>
                            <div className='subListTitle'>
                              <div className='subListTitleFlex'>
                                <div className='subListTitleInner'>
                                  <div className='subListTitleInnerdiv'>
                                    <span className='text'>팀스페이스</span>
                                  </div>
                                </div>
                              </div>
                              <div className='subListTitleRight'></div>
                            </div>
                            <div className='subListItems'>
                              <div className='subListInnerWarp'>
                                <div className='subListInner'>
                                  <div className='subList'>
                                    <div className='subListFlex'>
                                      <div className='subListFlexAligne'>
                                        <div className='subListFlexAligneTitle'>
                                          <span className='subListFlexAligneTitleSpan'>
                                            <div>
                                              <div className='innerdivFlex'>
                                                <div className='icon'>subIcons</div>
                                                <div className='subtext'>
                                                  <div className='subtextFlex'>
                                                    <div className='subtextFlexFlex'>
                                                      <div className='textext'>노션 레이아웃</div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='subList'>
                                    <div className='subListFlex'>
                                      <div className='subListFlexAligne'>
                                        <div className='subListFlexAligneTitle'>
                                          <span className='subListFlexAligneTitleSpan'>
                                            <div>
                                              <div className='innerdivFlex'>
                                                <div className='icon'>subIcons</div>
                                                <div className='subtext'>
                                                  <div className='subtextFlex'>
                                                    <div className='subtextFlexFlex'>
                                                      <div className='textext'>노션 레이아웃</div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </SubList>
                        </nav>
                      </SubLists>
                    </NavContent>
                  </NavInner>
                </NavInnerWrap>
              </NavContainer>
            </NavOutLine>
            <MainBody>  {/* Body */}
              <MainBodyHeader info={naiState}>
                <div className='MainBodyHeader1'>
                  <div className='MainBodyHeader2'>
                    <div className='MainBodyHeaderTitle'>
                      <div className='MainBodyHeaderTitleInner'>
                        <div className='navBtton'>
                          <div className='navBtton1' onClick={()=>setNaviState(pre => !pre)}>버튼</div>
                        </div>
                        <div className='MainBodyHeaderTitleInner2'>노션 레이아웃 </div>
                      </div>
                    </div>
                    <div className='MainBodyHeaderSettings'>
                      <div style={{display:"flex"}}>
                        <div className='innerSettings'>공유</div>
                        <div className='innerSettings'>즐겨찾기</div>
                      </div>
                    </div>
                  </div>
                </div>
              </MainBodyHeader>
              <MainSection>
                <div className='MainSection1'>
                  <div className='MainSection2'>
                    <div className='MainSection1Title'>아아아</div>
                    <p>테스트 페이지</p>
                  </div>
                </div>
              </MainSection>
            </MainBody>
          </Container>
    </OutLine>
  )
}

export default Main

const OutLine = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`

const Container = styled.div`
  width: 100vw;
  height: 100%;
  position: relative;
  display: flex;
  flex: 1 1 0;
`

// 1번 Nav
const NavOutLine = styled.div<InfoBoolean>`
  display: ${({info}) => info && "none"};
  flex-grow: 0;
  flex-shrink: 0;
  pointer-events: none;
  position: relative;
  z-index: 111;
  background-color: rgb(251, 251, 250);
  box-shadow: rgba(0, 0, 0, 0.024) -1px ;
  width: 240px;
`

// 2번 Nav
const NavContainer = styled.div`
  color: rgba(25, 23, 17, 0.6);
  height: 100%;
  font-weight: 500;
`

// 3번 Nav
const NavInnerWrap = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  display: flex;
  flex-direction: column;
  width: 0px;
  overflow: visible;
  z-index: 9;
`

// 4번 Nav
const NavInner = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 100%;
  overflow: hidden;
  position: relative;
  pointer-events: auto;
  visibility: visible;
  width: 240px;
  opacity: 1;
`

// 5번 Nav
const NavContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 100%;
`

const Profile = styled.div`
  display: block;
  flex-shrink: 0;
  flex-grow: 0;
  cursor: pointer;
  height: 45px;
  width: 100%;
  background-color: lightyellow;
`

const Lists = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  padding-bottom: 8px;
`

const List = styled.div`
  user-select: none;
  transition: background 20ms ease-in 0s;
  cursor: pointer;
  border-radius: 3px;
  margin-left: 4px;
  margin-right: 4px;
  width: calc(100% - 8px);
  color: rgba(25, 23, 17, 0.6);

  .layout {
    display: flex;
    align-items: center;
    width: 100%;
    font-size: 14px;
    min-height: 27px;
    padding: 2px 10px;
    margin-top: 1px;
    margin-bottom: 1px;
  }

  .icon {
    flex-shrink: 0;
    flex-grow: 0;
    border-radius: 3px;
    color: rgba(55, 53, 47, 0.65);
    width: 22px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
  }

  .text {
    flex: 1 1 auto;
    white-space: nowrap;
    min-width: 0px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`
const SubLists = styled.div`
  padding-top: 6px;
  padding-bottom: 20px;
  box-shadow: transparent 0px 0px 0px inset;
  transition: box-shadow 300ms ease 0s;
  z-index: 1;
  overflow: hidden auto;
  margin-right: 0px;
  margin-bottom: 0px;
`
const SubList = styled.div`
  margin-bottom: 18px;
  width: 100%;

  .subListTitle {
    display: flex;
    align-items: center;
    width: 100%;
    font-size: 14px;
    min-height: 24px;
    padding: 0px 14px 0px 15px;
    margin-top: 6px;
    margin-bottom: 2px;
  }
  .subListTitleFlex {
    flex: 1 1 auto;
    white-space: nowrap;
    min-width: 0px;
    overflow: visible;
    text-overflow: clip;
  }
  .subListTitleInner {
    display: flex;
    align-items: center;
  }

  .subListTitleInnerdiv {
    user-select: none;
    transition: background 20ms ease-in 0s;
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 3px;
    padding: 2px 4px;
    margin-left: -4px;

    .text {
      text-transform: initial;
      font-size: 12px;
      line-height: 1;
      color: rgba(55, 53, 47, 0.5);
      font-weight: 600;
      transition: color 100ms ease-out
    }
  }

  .subListTitleRight {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    flex-grow: 0;
    height: 100%;
    opacity: 0;
    pointer-events: none;
    transition: opacity 200ms ease-in 0s;
  }

  .subListItems {
    margin: 0px;

    .subListInnerWarp {
      display: flex;
    flex-direction: column;

    .subListInner {
      margin-bottom: 1px;
    width: 100%;
    }
    }
  }

  .subList {
    display: flex;
    align-items: center;
    width: 100%;
    font-size: 14px;
    min-height: 27px;
    padding: 0px;
    margin: 0px;
    border-radius: 0px;

    .subListFlex {
      flex: 1 1 auto;
    white-space: nowrap;
    min-width: 0px;
    overflow: visible;
    text-overflow: clip;

    .subListFlexAligne {
      display: flex;
    align-items: center;
      .subListFlexAligneTitle {
        user-select: none;
    transition: background 20ms ease-in 0s;
    cursor: pointer;
    width: calc(100% - 8px);
    display: flex;
    align-items: center;
    border-radius: 3px;
    margin-left: 4px;
    margin-right: 4px;

    .subListFlexAligneTitleSpan {
      text-transform: initial;
    font-size: 12px;
    line-height: 1;
    color: rgba(55, 53, 47, 0.5);
    font-weight: 600;
    transition: color 100ms ease-out 0s;
    width: 100%;

    .innerdivFlex {
      position: relative;
    display: flex;
    align-items: center;
    min-height: 28px;
    padding: 0px 10px 0px 11px;

    .icon {
      min-height: 20px;
    min-width: 20px;
    margin-right: 9px;
    }
    .subtext {
      flex-shrink: 1;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    .subtextFlex {
    display: flex;
    width: 100%;
    align-items: center;
    line-height: 16px;
    margin-bottom: 1px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    .subtextFlexFlex {
      display: flex;
    align-items: center;
    overflow: hidden;

    .textext {
      white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: rgba(55, 53, 47, 0.8);
    font-weight: 500;
    font-size: 14px;
    }
    }
    }
    }
    }
    }
      }
    }
    }
  }
`


const MainBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
`

const MainBodyHeader = styled.div<InfoBoolean>`
  max-width: 100vw;
  z-index: 100;
  background: white;
  user-select: none;

  .MainBodyHeader1 {
    width: 100%;
    max-width: 100vw;
    height: 45px;
    opacity: 1;
    transition: opacity 700ms ease 0s, color 700ms ease 0s;
    position: relative;
  }

  .MainBodyHeader2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    height: 45px;
    padding-left: 12px;
    padding-right: 10px;

    .MainBodyHeaderTitle {
      display: flex;
      align-items: center;
      line-height: 1.2;
      font-size: 14px;
      height: 100%;
      flex-grow: 0;
      margin-right: 8px;
      min-width: 0px;

      .MainBodyHeaderTitleInner {
        user-select: none;
        transition: background 20ms ease-in 0s;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        flex-shrink: 1;
        white-space: nowrap;
        height: 24px;
        border-radius: 4px;
        font-size: 14px;
        line-height: 1.2;
        min-width: 0px;
        padding-left: 6px;
        padding-right: 6px;
        color: rgb(55, 53, 47);

        .navBtton {
          display: ${({info}) => !info && "none"};
          flex-shrink: 0;
    width: 48px;
    height: 48px;
    margin: -12px -6px -12px -12px;
    padding: 12px;
        }
        .navBtton1 {
          position: absolute;
    top: 0px;
    left: 0px;
    will-change: opacity;
    opacity: 1;
        }


        .MainBodyHeaderTitleInner2 {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 240px;
        }
      }
    }
  .MainBodyHeaderSettings {
    flex-grow: 0;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    padding-right: 0px;
    padding-left: 12px;
    justify-content: space-between;
    z-index: 101;
    height: 45px;
    opacity: 1;
    transition: opacity 700ms ease 0s, color 700ms ease 0s;

    .innerSettings {
      user-select: none;
    transition: background 20ms ease-in 0s;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    flex-shrink: 0;
    white-space: nowrap;
    height: 28px;
    border-radius: 4px;
    font-size: 14px;
    line-height: 1.2;
    min-width: 0px;
    padding-left: 8px;
    padding-right: 8px;
    color: rgb(55, 53, 47);
    margin-right: 2px;
    }
  }  
  }  
`

const MainSection = styled.section`
  flex-grow: 0;
    flex-shrink: 1;
    display: flex;
    flex-direction: column;
    background: white;
    z-index: 1;
    height: calc(100vh - 45px);
    max-height: 100%;
    position: relative;
    /* width: 479px; */
    width: 100%;

    .MainSection1 {
      display: flex;
    flex-direction: column;
    z-index: 1;
    flex-grow: 1;
    position: relative;
    align-items: center;
    margin-right: 0px;
    margin-bottom: 0px;
    overflow: hidden auto;

    .MainSection2 {
      caret-color: rgb(55, 53, 47);
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    flex-grow: 1;
    --whenContentEditable--WebkitUserModify: read-write-plaintext-only;

    .MainSection2Title {
      width: 100%;
    display: flex;
    justify-content: center;
    z-index: 3;
    flex-shrink: 0;
    }
    }
    }
`