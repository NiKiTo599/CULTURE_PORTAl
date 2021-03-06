import React from 'react';
import { Row, Col } from 'react-bootstrap';
import teamStyle from './team.module.css';

const Team = ({ number, Mikita, MikitaWork, Katsiaryna, KatsiarynaWork, Volha, VolhaWork, Yauheni, YauheniWork }) => {
    return (
        <div className={teamStyle.team_container}>
        <h3 className={teamStyle.team_container_title}>{ number }</h3>
        <div className={teamStyle.members_container}>
            <Row className={teamStyle.row}>
                <Col md>
                    <div className={teamStyle.member}>
                        <div>
                            <img src='https://avatars2.githubusercontent.com/u/47752368?s=460&v=4' className={teamStyle.member_image} alt=''></img>
                        </div>
                        <div className={teamStyle.member_info}>
                            <h4 className={teamStyle.member_name}>{ Mikita }</h4>
                            <p className={teamStyle.member_description}>{ MikitaWork }</p>
                            <a href="https://github.com/NiKiTo599" className={teamStyle.button} title='follow GitHub'><svg class="octicon octicon-mark-github v-align-middle" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg></a>
                        </div>
                    </div>
                </Col>
                <Col md>
                    <div className={teamStyle.member}>
                        <div>
                            <img src='https://avatars3.githubusercontent.com/u/44402789?s=460&v=4' className={teamStyle.member_image} alt=''></img>
                        </div>
                        <div className={teamStyle.member_info}>
                            <h4 className={teamStyle.member_name}>{ Katsiaryna }</h4>
                            <p className={teamStyle.member_description}>{ KatsiarynaWork }
</p>
                            <a href="https://github.com/jarolika30" className={teamStyle.button} title='follow GitHub'><svg class="octicon octicon-mark-github v-align-middle" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg></a>
                        </div>
                    </div>
                </Col>
                <Col md>
                    <div className={teamStyle.member}>
                        <div>
                            <img src='https://avatars2.githubusercontent.com/u/31925515?s=460&v=4' className={teamStyle.member_image} alt=''></img>
                        </div>
                        <div className={teamStyle.member_info}>
                            <h4 className={teamStyle.member_name}> { Volha } </h4>
                            <p className={teamStyle.member_description}>{ VolhaWork }</p>
                            <a href="https://github.com/Vola-G" className={teamStyle.button} title='follow GitHub'><svg class="octicon octicon-mark-github v-align-middle" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg></a>
                        </div>
                    </div>
                </Col>
                <Col md>
                    <div className={teamStyle.member}>
                        <div>
                            <img src='https://avatars2.githubusercontent.com/u/31180729?s=460&v=4' className={teamStyle.member_image} alt=''></img>
                        </div>
                        <div className={teamStyle.member_info}>
                            <h4 className={teamStyle.member_name}>{ Yauheni } </h4>
                            <p className={teamStyle.member_description}>{YauheniWork}</p>
                            <a href="https://github.com/yakgjen" className={teamStyle.button} title='follow GitHub'><svg class="octicon octicon-mark-github v-align-middle" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg></a>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    </div>
    )
}

export default Team