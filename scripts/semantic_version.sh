#!/usr/bin/env bash

function git_last_message {
  echo $(git log -1 --pretty=format:'%s')
}

last_message=$(git_last_message)
version_mode="patch"

function get_semantic_version {
    repo="admission_form"

    response=$(curl -sL \
        -H "Accept: application/vnd.github.v3+json" \
        -H "Authorization: Bearer ${ADMISSION_FORM_TOKEN}" \
        -H "X-GitHub-Api-Version: 2022-11-28" \
        "https://api.github.com/repos/${SEMANTIC_VERSION_GITHUB_OWNER}/${repo}/pulls?state=closed&sort=updated&direction=desc&page=1&per_page=1")


    if [[ $(echo "$response" | jq '.[0].labels | length') -gt 0 ]]; then
        labels_names=$(echo "$response" | jq -r '.[0].labels[].name')
        echo "Labels found: $labels_names"
    else
        echo "Labels not found."
    fi

    if [[ "$labels_names" == *"major"* ]]; then
        version_mode="major"
    elif [[ "$labels_names" == *"minor"* ]]; then
        version_mode="minor"
    fi
}

if [[ "$last_message" =~ ^([0-9]+\.){2}[0-9]+$ ]]; then
    echo "Last commit was a version generation commit, not generating again."
else
    get_semantic_version

    echo "Generating version..."
    echo "Labels: ${labels_names}"
    npm version $version_mode
    echo "Version generated $version_mode."

    version=`node -p "require('./package.json').version"`

    echo $version
    git add .
    git commit -m $version
    git push origin main
fi

