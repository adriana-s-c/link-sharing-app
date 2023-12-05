import styles from "./index.module.scss";
import { Stack } from "../../../../components/Stack";
import { ReactComponent as Icon } from "../../../../images/icon-drag-and-drop.svg";
import { Text } from "../../../../components/Text";
import { Select } from "../../../../components/Select";
import { Input } from "../../../../components/Input";
import { Option } from "../../../../context";

type Props = {
  options: Option[];
  selectedOption: any;
  setSelectedOption: any;
};

export function AddLink({ options, selectedOption, setSelectedOption }: Props) {
  const handleLinkChange = (event: any) => {
    const newLink = event.target.value;
    setSelectedOption({
      ...selectedOption,
      link: newLink,
    });
  };
  return (
    <Stack orientation="vertical" className={styles.box} gap="12px">
      <Stack
        orientation="horizontal"
        align="center"
        spacing="between"
        className={styles.fullWidth}
      >
        <Stack align="center" gap="8px">
          <Icon />
          <Text type="heading" size="s" color="grey">
            Link #1
          </Text>
        </Stack>
        <Text type="body" size="m" color="grey">
          Remove
        </Text>
      </Stack>
      <Stack orientation="vertical">
        <Text type="body" size="s">
          Platform
        </Text>
        <Select
          options={options}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </Stack>
      <Input
        title="Link"
        id="link"
        icon="link"
        placeholder="e.g. https://www.github.com/johnappleseed"
        value={selectedOption.link || ""}
        onChange={handleLinkChange}
      />
    </Stack>
  );
}
