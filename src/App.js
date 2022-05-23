import "./App.css";
import React, {useEffect} from "react";
import {PlayerButton} from "./ui/components/PlayerButton";
import {Bpm} from "./ui/components/Bpm";
import {Beat} from "./ui/components/Beat";
import {Duration} from "./ui/components/Duration";
import { Sound } from "./ui/components/Sound";
import { VoiceControl } from "./ui/components/VoiceControl";
import {Button, Layout, Typography} from 'antd';
import {PROPS} from "./PROPS";
import {QuestionCircleOutlined} from "@ant-design/icons";

const {Content, Header} = Layout;
const {Title} = Typography;

const App = ({sequencer, storage, voiceControl}) => {
    useEffect(() => {
        const init = async () => {
            await sequencer.loadAudio();
            await storage.loadPreset();
        };
        init();
    }, [sequencer, storage]);

    return (
        <div className="app">
            <Layout style={{ background: "white" }}>
                <Header>
                    <div>
                        <Title>Metronome</Title>
                        <Title level={3}>With voice control</Title>
                    </div>
                    <Button
                        style={{
                            marginLeft: "1rem",
                            fontSize: "1.3rem",
                            height: "2.8rem",
                        }}
                        icon={<QuestionCircleOutlined />}
                    >
                        How to use it
                    </Button>
                </Header>

                <Content
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                        flexDirection: "column",
                        width: "55%",
                        margin: "auto",
                    }}
                >
                    <Bpm />
                    <PlayerButton sequencer={sequencer} />

                    <VoiceControl voiceControl={voiceControl} />

                    <Beat />
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Sound
                            type={"upbeat"}
                            sampleNames={PROPS.SAMPLE.AVAILABLE}
                        />
                        <Sound
                            type={"downbeat"}
                            sampleNames={PROPS.SAMPLE.AVAILABLE}
                        />
                    </div>
                    <Duration />
                </Content>
            </Layout>
        </div>
    );
};

export default App;
